/**
 * header service
 */

export default ({ strapi }: { strapi: any }) => ({
  async getHeaderData() {
    // Lấy danh mục bài viết sản phẩm (cấp 1) và các danh mục cấp 2
    const danhMucBaiViets = await strapi.entityService.findMany('api::danh-muc-bai-viet.danh-muc-bai-viet', {
      populate: {
        danhMucCapHai: {
          populate: '*',
        },
      },
      publicationState: 'live',
    });

    // Format response theo yêu cầu
    const formattedData = danhMucBaiViets.map((danhMuc: any) => ({
      category: danhMuc.title,
      subcategory: (danhMuc.danhMucCapHai || []).map((capHai: any) => capHai.title || ''),
    }));

    return {
      'danh-muc-bai-san-pham': formattedData,
    };
  },
});

