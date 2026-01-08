/**
 * danh-muc-san-pham controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::danh-muc-san-pham.danh-muc-san-pham', ({ strapi }) => ({
  // Endpoint để lấy danhMucCapBa theo slug
  async getDanhMucCapBaBySlug(ctx) {
    try {
      const { slug } = ctx.params;

      if (!slug) {
        return ctx.badRequest('Slug is required');
      }

      // Lấy tất cả danh mục sản phẩm (cấp 1) với danhMucCapHai và danhMucCapBa
      const danhMucSanPhams = await strapi.entityService.findMany('api::danh-muc-san-pham.danh-muc-san-pham', {
        populate: {
          danhMucCapHai: {
            populate: {
              seo: {
                populate: '*',
              },
              danhMucCapBa: {
                populate: {
                  seo: {
                    populate: '*',
                  },
                  san_phams: {
                    populate: {
                      seo: {
                        populate: '*',
                      },
                      anhSanPham: true,
                    },
                  },
                },
              },
            },
          },
        },
        publicationState: 'live',
      } as any);

      // Tìm danhMucCapBa có slug khớp
      let danhMucCapBa: any = null;
      let parentCategoryLevel2: any = null;
      let parentCategoryLevel1: any = null;

      for (const danhMuc of danhMucSanPhams) {
        const danhMucAny = danhMuc as any;
        if (danhMucAny.danhMucCapHai && Array.isArray(danhMucAny.danhMucCapHai)) {
          for (const capHai of danhMucAny.danhMucCapHai) {
            const capHaiAny = capHai as any;
            if (capHaiAny.danhMucCapBa && Array.isArray(capHaiAny.danhMucCapBa)) {
              const found = capHaiAny.danhMucCapBa.find((capBa: any) => capBa.slug === slug);
              if (found) {
                danhMucCapBa = found;
                parentCategoryLevel2 = {
                  title: capHaiAny.title,
                  slug: capHaiAny.slug,
                };
                parentCategoryLevel1 = {
                  title: danhMucAny.title,
                  slug: danhMucAny.slug,
                };
                break;
              }
            }
          }
          if (danhMucCapBa) {
            break;
          }
        }
      }

      if (!danhMucCapBa) {
        return ctx.notFound('Danh mục cấp 3 not found');
      }

      ctx.body = {
        data: {
          ...danhMucCapBa,
          parentCategoryLevel2,
          parentCategoryLevel1,
        },
      };
    } catch (error: any) {
      ctx.throw(500, error);
    }
  },
}));

