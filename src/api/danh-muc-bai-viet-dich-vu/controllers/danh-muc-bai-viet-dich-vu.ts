/**
 * danh-muc-bai-viet-dich-vu controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', ({ strapi }) => ({
  // Endpoint để lấy danhMucCapHai theo slug
  async getDanhMucCapHaiBySlug(ctx) {
    try {
      const { slug } = ctx.params;

      if (!slug) {
        return ctx.badRequest('Slug is required');
      }

      // Lấy tất cả danh mục bài viết dịch vụ (cấp 1) với danhMucCapHai
      const danhMucBaiVietDichVus = await strapi.entityService.findMany('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', {
        populate: {
          danhMucCapHai: {
            populate: {
              seo: {
                populate: {
                  ogImage: true,
                  twitterImage: true,
                },
              },
              baiViets: {
                populate: {
                  seo: {
                    populate: {
                      ogImage: true,
                      twitterImage: true,
                    },
                  },
                  avatar: true,
                },
              },
            },
          },
        },
        publicationState: 'live',
      });

      // Tìm danhMucCapHai có slug khớp
      let danhMucCapHai: any = null;
      let parentCategory: any = null;

      for (const danhMuc of danhMucBaiVietDichVus) {
        const danhMucAny = danhMuc as any;
        if (danhMucAny.danhMucCapHai && Array.isArray(danhMucAny.danhMucCapHai)) {
          const found = danhMucAny.danhMucCapHai.find((capHai: any) => capHai.slug === slug);
          if (found) {
            danhMucCapHai = found;
            parentCategory = {
              title: danhMucAny.title,
              slug: danhMucAny.slug,
            };
            break;
          }
        }
      }

      if (!danhMucCapHai) {
        return ctx.notFound('Danh mục cấp 2 not found');
      }

      ctx.body = {
        data: {
          ...danhMucCapHai,
          parentCategory,
        },
      };
    } catch (error: any) {
      ctx.throw(500, error);
    }
  },
}));

