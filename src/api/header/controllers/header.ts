/**
 * header controller
 */

export default {
  async getHeaderData(ctx) {
    try {
      // Trong Strapi, strapi instance có thể được truy cập từ global
      // hoặc từ ctx.state.strapi (tùy phiên bản)
      const strapi = (global as any).strapi;
      
      if (!strapi || !strapi.entityService) {
        ctx.throw(500, 'Strapi instance not available');
        return;
      }

      // Lấy danh mục bài viết sản phẩm (cấp 1) và các danh mục cấp 2
      const danhMucBaiViets = await strapi.entityService.findMany('api::danh-muc-bai-viet.danh-muc-bai-viet', {
        fields: ['title', 'slug'],
        populate: {
          danhMucCapHai: {
            fields: ['title', 'slug'],
          },
        },
        publicationState: 'live',
      });

      // Lấy danh mục bài viết dịch vụ (cấp 1) và các danh mục cấp 2
      const danhMucBaiVietDichVus = await strapi.entityService.findMany('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', {
        fields: ['title', 'slug'],
        populate: {
          danhMucCapHai: {
            fields: ['title', 'slug'],
          },
        },
        publicationState: 'live',
      });

      // Lấy danh mục sản phẩm (cấp 1, 2, 3) với populate đầy đủ
      const danhMucSanPhams = await strapi.entityService.findMany('api::danh-muc-san-pham.danh-muc-san-pham', {
        fields: ['title', 'slug'],
        populate: {
          danhMucCapHai: {
            fields: ['title', 'slug'],
            populate: {
              danhMucCapBa: {
                fields: ['title', 'slug'],
              },
            },
          },
        },
        publicationState: 'live',
      });

      // Format response cho danh mục bài viết sản phẩm
      // category: title của danh mục cấp 1
      // subcategory: array object với title và slug của các danhMucCapHai (cấp 2)
      const formattedDataSanPham = danhMucBaiViets.map((danhMuc: any) => ({
        category: danhMuc.title,
        subcategory: (danhMuc.danhMucCapHai || []).map((capHai: any) => ({
          title: capHai.title || '',
          slug: capHai.slug || '',
        })),
      }));

      // Format response cho danh mục bài viết dịch vụ
      const formattedDataDichVu = danhMucBaiVietDichVus.map((danhMuc: any) => ({
        category: danhMuc.title,
        subcategory: (danhMuc.danhMucCapHai || []).map((capHai: any) => ({
          title: capHai.title || '',
          slug: capHai.slug || '',
        })),
      }));

      // Format response cho danh mục sản phẩm (3 cấp)
      // category: title của danh mục cấp 1
      // subcategory: array object với title, slug của cấp 2 và subcategory (cấp 3)
      const formattedDataDanhMucSanPham = danhMucSanPhams.map((danhMuc: any) => ({
        category: danhMuc.title,
        subcategory: (danhMuc.danhMucCapHai || []).map((capHai: any) => ({
          title: capHai.title || '',
          slug: capHai.slug || '',
          subcategory: (capHai.danhMucCapBa || []).map((capBa: any) => ({
            title: capBa.title || '',
            slug: capBa.slug || '',
          })),
        })),
      }));

      ctx.body = {
        'danh-muc-bai-san-pham': formattedDataSanPham,
        'danh-muc-bai-dich-vu': formattedDataDichVu,
        'danh-muc-san-pham': formattedDataDanhMucSanPham,
      };
    } catch (err: any) {
      ctx.body = err;
    }
  },
};

