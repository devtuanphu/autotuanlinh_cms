/**
 * don-hang controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::don-hang.don-hang', ({ strapi }) => ({
  async create(ctx) {
    const { data } = ctx.request.body;

    try {
      // Ensure maDonHang is generated if not provided
      if (!data.maDonHang) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        data.maDonHang = `DH${timestamp}${random}`;
      }

      // Validate and transform sanPham relations in component
      if (data.sanPhams && Array.isArray(data.sanPhams)) {
        // Validate all products exist and are published
        for (const item of data.sanPhams) {
          if (item.sanPham) {
            const sanPhamId = typeof item.sanPham === 'number' 
              ? item.sanPham 
              : (item.sanPham.id ? parseInt(item.sanPham.id, 10) : null);
            
            if (sanPhamId) {
              // Check if product exists and is published
              const sanPham = await strapi.entityService.findOne('api::san-pham.san-pham', sanPhamId, {
                publicationState: 'live',
              } as any);

              if (!sanPham) {
                return ctx.badRequest(`Sản phẩm với ID ${sanPhamId} không tồn tại hoặc chưa được publish`);
              }
            }
          }
        }

        // Transform to proper format - Strapi v5 uses direct ID for manyToOne in component
        data.sanPhams = data.sanPhams.map((item: any) => {
          const newItem: any = {
            soLuong: item.soLuong,
            giaBan: item.giaBan,
            thanhTien: item.thanhTien,
          };

          // Handle sanPham relation
          if (item.sanPham) {
            const sanPhamId = typeof item.sanPham === 'number' 
              ? item.sanPham 
              : (item.sanPham.id ? parseInt(item.sanPham.id, 10) : null);
            
            if (sanPhamId) {
              // For manyToOne relation in component, use direct ID
              newItem.sanPham = sanPhamId;
            }
          }

          return newItem;
        });
      }

      // Use entityService to create the order
      const entry = await strapi.entityService.create('api::don-hang.don-hang', {
        data,
      });

      // Populate the response
      const populatedEntry = await strapi.entityService.findOne('api::don-hang.don-hang', entry.id, {
        populate: {
          sanPhams: {
            populate: {
              sanPham: true,
            },
          },
          thongTinKhachHang: true,
          phuongThucThanhToan: true,
        },
      });

      ctx.body = { data: populatedEntry };
    } catch (error: any) {
      // Provide more detailed error message
      if (error.message) {
        ctx.throw(400, error.message);
      } else {
        ctx.throw(400, error);
      }
    }
  },
}));

