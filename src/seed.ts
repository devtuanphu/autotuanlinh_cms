import type { Core } from '@strapi/strapi';

export async function seedData(strapi: Core.Strapi) {
  try {
    console.log('🌱 Starting seed data...');

    // Check if collection types data already exists (skip if FORCE_SEED is set)
    const forceSeed = process.env.FORCE_SEED === 'true';
    if (!forceSeed) {
      try {

        const existingBlogs = await strapi.entityService.findMany('api::blog.blog', { limit: 1 });
        const existingDanhMuc = await strapi.entityService.findMany('api::danh-muc-san-pham.danh-muc-san-pham', { limit: 1 });
        
       
      } catch (error) {
        // If error, continue seeding
        console.log('ℹ️ No existing data found, proceeding with seed...');
      }
    } else {
      console.log('⚠️ FORCE_SEED is enabled, will seed even if data exists');
    }

    // 1. Seed Topic Blog
 

    // 2. Seed Blog (30 bài viết)
    console.log('📝 Seeding Blog (30 bài viết)...');
    const blogTitles = [
      // Bài viết về phụ kiện nội thất
      { title: 'Hướng dẫn chọn ghế da ô tô phù hợp', hashtag: '#gheda #phukien', topic: 0 },
      { title: 'Review ghế da cao cấp cho ô tô', hashtag: '#gheda #review', topic: 0 },
      { title: 'So sánh các loại bọc ghế da trên thị trường', hashtag: '#bocgheda #sosanh', topic: 0 },
      { title: 'Cách bảo quản ghế da ô tô đúng cách', hashtag: '#gheda #baoquan', topic: 0 },
      { title: 'Top 5 vô lăng da tốt nhất 2025', hashtag: '#volang #top5', topic: 0 },
      { title: 'Hướng dẫn chọn vô lăng thể thao cho xe', hashtag: '#volang #thethao', topic: 0 },
      { title: 'Đánh giá thảm sàn 3D cao cấp', hashtag: '#thamsan #review', topic: 0 },
      { title: 'Cách chọn thảm sàn phù hợp với nội thất xe', hashtag: '#thamsan #huongdan', topic: 0 },
      { title: 'Review túi đựng đồ đa năng cho ô tô', hashtag: '#tuidungdo #review', topic: 0 },
      { title: 'Gối tựa đầu nào tốt nhất cho lái xe đường dài', hashtag: '#goituadau #review', topic: 0 },
      // Bài viết về phụ kiện ngoại thất
      { title: 'Hướng dẫn chọn cản trước/sau phù hợp', hashtag: '#canxe #huongdan', topic: 1 },
      { title: 'Review đèn pha LED cao cấp cho ô tô', hashtag: '#denpha #led', topic: 1 },
      { title: 'So sánh đèn pha LED và đèn Halogen', hashtag: '#denpha #sosanh', topic: 1 },
      { title: 'Cách lắp đặt gương chiếu hậu tự động', hashtag: '#guong #huongdan', topic: 1 },
      { title: 'Top 5 ốp viền đẹp nhất cho ô tô', hashtag: '#opvien #top5', topic: 1 },
      { title: 'Logo nổi - Phụ kiện làm đẹp xe độc đáo', hashtag: '#logonoi #phukien', topic: 1 },
      { title: 'Chắn bùn nào tốt nhất cho xe SUV', hashtag: '#chanbun #review', topic: 1 },
      { title: 'Hướng dẫn chọn phụ kiện ngoại thất', hashtag: '#phukienngoaithat #huongdan', topic: 1 },
      // Bài viết về đồ chơi xe hơi
      { title: 'Camera hành trình nào tốt nhất 2025', hashtag: '#camerahanhtrinh #review', topic: 0 },
      { title: 'Hướng dẫn lắp đặt camera hành trình', hashtag: '#camerahanhtrinh #huongdan', topic: 0 },
      { title: 'Cảm biến lùi - Phụ kiện an toàn cần thiết', hashtag: '#cambienlui #antoan', topic: 0 },
      { title: 'HUD hiển thị - Công nghệ tương lai cho ô tô', hashtag: '#hud #congnghe', topic: 0 },
      { title: 'Review đầu DVD Android tốt nhất', hashtag: '#daudvd #android', topic: 0 },
      { title: 'Hướng dẫn nâng cấp hệ thống âm thanh xe', hashtag: '#amthanh #huongdan', topic: 0 },
      { title: 'Top 5 loa ô tô tốt nhất 2025', hashtag: '#loa #top5', topic: 0 },
      { title: 'Bộ sạc USB đa năng cho ô tô', hashtag: '#sacusb #phukien', topic: 0 },
      // Bài viết về dịch vụ
      { title: 'Phim cách nhiệt 3M - Ưu và nhược điểm', hashtag: '#phimcachnhiet #3m', topic: 1 },
      { title: 'So sánh phim cách nhiệt 3M, Llumar, V-Kool', hashtag: '#phimcachnhiet #sosanh', topic: 1 },
      { title: 'Bảo hành phim cách nhiệt - Những điều cần biết', hashtag: '#baohanhphim #huongdan', topic: 1 },
      { title: 'Bọc ghế da thật vs da simili - Nên chọn loại nào', hashtag: '#bocgheda #sosanh', topic: 1 },
      { title: 'Hướng dẫn nâng cấp nội thất ô tô', hashtag: '#nangcapnoithat #huongdan', topic: 1 },
      { title: 'Lắp đặt loa ô tô - Những lưu ý quan trọng', hashtag: '#lapdatloa #huongdan', topic: 1 },
      { title: 'Nâng cấp đầu DVD - Có nên không?', hashtag: '#nangcapdaudvd #review', topic: 1 },
    ];

    const blogs = await Promise.all(
      blogTitles.map((item, index) => {
        const descriptions = [
          'Bài viết chi tiết về sản phẩm và dịch vụ phụ kiện ô tô chính hãng.',
          'Hướng dẫn đầy đủ về cách sử dụng và bảo quản phụ kiện ô tô.',
          'Đánh giá khách quan về chất lượng và hiệu quả của sản phẩm.',
          'So sánh các sản phẩm trên thị trường để giúp bạn lựa chọn tốt nhất.',
          'Những mẹo và kinh nghiệm hữu ích khi mua phụ kiện ô tô.',
        ];
        return strapi.entityService.create('api::blog.blog', {
          data: {
            seo: {
              metaTitle: item.title,
              metaDescription: `${item.title} - ${descriptions[index % descriptions.length]}`,
              metaKeywords: `phụ kiện ô tô, ${item.hashtag.replace(/#/g, '')}`,
              robots: 'index, follow',
            },
            hashtag: item.hashtag,
            title: item.title,
            moTaNgan: `${item.title}. ${descriptions[index % descriptions.length]}`,
            noiDung: `<p>Nội dung chi tiết về ${item.title.toLowerCase()}...</p><p>Đây là bài viết cung cấp thông tin đầy đủ và hữu ích cho khách hàng.</p>`,
          
            publishedAt: new Date(),
          },
        });
      })
    );

    // 3. Seed Danh mục bài viết sản phẩm
    console.log('📝 Seeding Danh mục bài viết sản phẩm...');
    
    // 3.1. Phụ kiện nội thất
    await strapi.entityService.create('api::danh-muc-bai-viet.danh-muc-bai-viet', {
      data: {
        seo: {
          metaTitle: 'Bài viết về phụ kiện nội thất ô tô',
          metaDescription: 'Danh mục các bài viết về phụ kiện nội thất ô tô',
          metaKeywords: 'bài viết phụ kiện nội thất, nội thất ô tô',
          robots: 'index, follow',
        },
        title: 'Phụ kiện nội thất',
        moTa: 'Danh mục các bài viết về phụ kiện nội thất ô tô',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Ghế da',
              metaDescription: 'Các bài viết về ghế da cho ô tô',
              metaKeywords: 'ghế da, bài viết ghế da',
              robots: 'index, follow',
            },
            title: 'Ghế da',
            slug: 'ghe-da',
          },
          {
            seo: {
              metaTitle: 'Vô lăng',
              metaDescription: 'Các bài viết về vô lăng cho ô tô',
              metaKeywords: 'vô lăng, bài viết vô lăng',
              robots: 'index, follow',
            },
            title: 'Vô lăng',
            slug: 'vo-lang',
          },
          {
            seo: {
              metaTitle: 'Thảm sàn',
              metaDescription: 'Các bài viết về thảm sàn cho ô tô',
              metaKeywords: 'thảm sàn, bài viết thảm sàn',
              robots: 'index, follow',
            },
            title: 'Thảm sàn',
            slug: 'tham-san',
          },
          {
            seo: {
              metaTitle: 'Túi đựng đồ',
              metaDescription: 'Các bài viết về túi đựng đồ cho ô tô',
              metaKeywords: 'túi đựng đồ, bài viết túi đựng đồ',
              robots: 'index, follow',
            },
            title: 'Túi đựng đồ',
            slug: 'tui-dung-do',
          },
          {
            seo: {
              metaTitle: 'Gối tựa đầu',
              metaDescription: 'Các bài viết về gối tựa đầu cho ô tô',
              metaKeywords: 'gối tựa đầu, bài viết gối tựa đầu',
              robots: 'index, follow',
            },
            title: 'Gối tựa đầu',
            slug: 'goi-tua-dau',
          },
          {
            seo: {
              metaTitle: 'Bọc vô lăng',
              metaDescription: 'Các bài viết về bọc vô lăng cho ô tô',
              metaKeywords: 'bọc vô lăng, bài viết bọc vô lăng',
              robots: 'index, follow',
            },
            title: 'Bọc vô lăng',
            slug: 'boc-vo-lang',
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 3.2. Phụ kiện ngoại thất
    await strapi.entityService.create('api::danh-muc-bai-viet.danh-muc-bai-viet', {
      data: {
        seo: {
          metaTitle: 'Bài viết về phụ kiện ngoại thất ô tô',
          metaDescription: 'Danh mục các bài viết về phụ kiện ngoại thất ô tô',
          metaKeywords: 'bài viết phụ kiện ngoại thất, ngoại thất ô tô',
          robots: 'index, follow',
        },
        title: 'Phụ kiện ngoại thất',
        moTa: 'Danh mục các bài viết về phụ kiện ngoại thất ô tô',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Cản trước/sau',
              metaDescription: 'Các bài viết về cản trước và cản sau cho ô tô',
              metaKeywords: 'cản trước, cản sau, bài viết cản',
              robots: 'index, follow',
            },
            title: 'Cản trước/sau',
            slug: 'can-truoc-sau',
          },
          {
            seo: {
              metaTitle: 'Đèn pha',
              metaDescription: 'Các bài viết về đèn pha cho ô tô',
              metaKeywords: 'đèn pha, bài viết đèn pha',
              robots: 'index, follow',
            },
            title: 'Đèn pha',
            slug: 'den-pha',
          },
          {
            seo: {
              metaTitle: 'Gương chiếu hậu',
              metaDescription: 'Các bài viết về gương chiếu hậu cho ô tô',
              metaKeywords: 'gương chiếu hậu, bài viết gương',
              robots: 'index, follow',
            },
            title: 'Gương chiếu hậu',
            slug: 'guong-chieu-hau',
          },
          {
            seo: {
              metaTitle: 'Ốp viền',
              metaDescription: 'Các bài viết về ốp viền cho ô tô',
              metaKeywords: 'ốp viền, bài viết ốp viền',
              robots: 'index, follow',
            },
            title: 'Ốp viền',
            slug: 'op-vien',
          },
          {
            seo: {
              metaTitle: 'Logo nổi',
              metaDescription: 'Các bài viết về logo nổi cho ô tô',
              metaKeywords: 'logo nổi, bài viết logo',
              robots: 'index, follow',
            },
            title: 'Logo nổi',
            slug: 'logo-noi',
          },
          {
            seo: {
              metaTitle: 'Chắn bùn',
              metaDescription: 'Các bài viết về chắn bùn cho ô tô',
              metaKeywords: 'chắn bùn, bài viết chắn bùn',
              robots: 'index, follow',
            },
            title: 'Chắn bùn',
            slug: 'chan-bun',
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 3.3. Đồ chơi xe hơi
    await strapi.entityService.create('api::danh-muc-bai-viet.danh-muc-bai-viet', {
      data: {
        seo: {
          metaTitle: 'Bài viết về đồ chơi xe hơi',
          metaDescription: 'Danh mục các bài viết về đồ chơi và phụ kiện điện tử cho xe hơi',
          metaKeywords: 'bài viết đồ chơi xe hơi, phụ kiện điện tử',
          robots: 'index, follow',
        },
        title: 'Đồ chơi xe hơi',
        moTa: 'Danh mục các bài viết về đồ chơi và phụ kiện điện tử cho xe hơi',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Camera hành trình',
              metaDescription: 'Các bài viết về camera hành trình cho ô tô',
              metaKeywords: 'camera hành trình, bài viết camera',
              robots: 'index, follow',
            },
            title: 'Camera hành trình',
            slug: 'camera-hanh-trinh',
          },
          {
            seo: {
              metaTitle: 'Cảm biến lùi',
              metaDescription: 'Các bài viết về cảm biến lùi cho ô tô',
              metaKeywords: 'cảm biến lùi, bài viết cảm biến',
              robots: 'index, follow',
            },
            title: 'Cảm biến lùi',
            slug: 'cam-bien-lui',
          },
          {
            seo: {
              metaTitle: 'HUD hiển thị',
              metaDescription: 'Các bài viết về HUD hiển thị cho ô tô',
              metaKeywords: 'HUD hiển thị, bài viết HUD',
              robots: 'index, follow',
            },
            title: 'HUD hiển thị',
            slug: 'hud-hien-thi',
          },
          {
            seo: {
              metaTitle: 'Đầu DVD Android',
              metaDescription: 'Các bài viết về đầu DVD Android cho ô tô',
              metaKeywords: 'đầu DVD Android, bài viết đầu DVD',
              robots: 'index, follow',
            },
            title: 'Đầu DVD Android',
            slug: 'dau-dvd-android',
          },
          {
            seo: {
              metaTitle: 'Loa & Amply',
              metaDescription: 'Các bài viết về loa và amply cho ô tô',
              metaKeywords: 'loa, amply, bài viết loa',
              robots: 'index, follow',
            },
            title: 'Loa & Amply',
            slug: 'loa-amply',
          },
          {
            seo: {
              metaTitle: 'Bộ sạc USB',
              metaDescription: 'Các bài viết về bộ sạc USB cho ô tô',
              metaKeywords: 'bộ sạc USB, bài viết sạc USB',
              robots: 'index, follow',
            },
            title: 'Bộ sạc USB',
            slug: 'bo-sac-usb',
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 4. Seed Danh mục bài viết dịch vụ
    console.log('📝 Seeding Danh mục bài viết dịch vụ...');
    
    // 4.1. Dán phim cách nhiệt
    await strapi.entityService.create('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', {
      data: {
        seo: {
          metaTitle: 'Bài viết về dán phim cách nhiệt',
          metaDescription: 'Danh mục các bài viết về dịch vụ dán phim cách nhiệt',
          metaKeywords: 'bài viết dán phim cách nhiệt, phim cách nhiệt',
          robots: 'index, follow',
        },
        title: 'Dán phim cách nhiệt',
        moTa: 'Danh mục các bài viết về dịch vụ dán phim cách nhiệt',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Phim cách nhiệt 3M',
              metaDescription: 'Các bài viết về phim cách nhiệt 3M',
              metaKeywords: 'phim cách nhiệt 3M, bài viết 3M',
              robots: 'index, follow',
            },
            title: 'Phim cách nhiệt 3M',
            slug: 'phim-cach-nhiet-3m',
          },
          {
            seo: {
              metaTitle: 'Phim cách nhiệt Llumar',
              metaDescription: 'Các bài viết về phim cách nhiệt Llumar',
              metaKeywords: 'phim cách nhiệt Llumar, bài viết Llumar',
              robots: 'index, follow',
            },
            title: 'Phim cách nhiệt Llumar',
            slug: 'phim-cach-nhiet-llumar',
          },
          {
            seo: {
              metaTitle: 'Phim cách nhiệt V-Kool',
              metaDescription: 'Các bài viết về phim cách nhiệt V-Kool',
              metaKeywords: 'phim cách nhiệt V-Kool, bài viết V-Kool',
              robots: 'index, follow',
            },
            title: 'Phim cách nhiệt V-Kool',
            slug: 'phim-cach-nhiet-v-kool',
          },
          {
            seo: {
              metaTitle: 'Bảo hành phim',
              metaDescription: 'Các bài viết về bảo hành phim cách nhiệt',
              metaKeywords: 'bảo hành phim, bài viết bảo hành',
              robots: 'index, follow',
            },
            title: 'Bảo hành phim',
            slug: 'bao-hanh-phim',
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 4.2. Bọc ghế da
    await strapi.entityService.create('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', {
      data: {
        seo: {
          metaTitle: 'Bài viết về bọc ghế da',
          metaDescription: 'Danh mục các bài viết về dịch vụ bọc ghế da',
          metaKeywords: 'bài viết bọc ghế da, bọc ghế',
          robots: 'index, follow',
        },
        title: 'Bọc ghế da',
        moTa: 'Danh mục các bài viết về dịch vụ bọc ghế da',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Bọc ghế da thật',
              metaDescription: 'Các bài viết về bọc ghế da thật',
              metaKeywords: 'bọc ghế da thật, bài viết da thật',
              robots: 'index, follow',
            },
            title: 'Bọc ghế da thật',
            slug: 'boc-ghe-da-that',
          },
          {
            seo: {
              metaTitle: 'Bọc ghế da simili',
              metaDescription: 'Các bài viết về bọc ghế da simili',
              metaKeywords: 'bọc ghế da simili, bài viết simili',
              robots: 'index, follow',
            },
            title: 'Bọc ghế da simili',
            slug: 'boc-ghe-da-simili',
          },
          {
            seo: {
              metaTitle: 'Nâng cấp nội thất',
              metaDescription: 'Các bài viết về nâng cấp nội thất ô tô',
              metaKeywords: 'nâng cấp nội thất, bài viết nội thất',
              robots: 'index, follow',
            },
            title: 'Nâng cấp nội thất',
            slug: 'nang-cap-noi-that',
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 4.3. Nâng cấp âm thanh
    await strapi.entityService.create('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', {
      data: {
        seo: {
          metaTitle: 'Bài viết về nâng cấp âm thanh',
          metaDescription: 'Danh mục các bài viết về dịch vụ nâng cấp âm thanh ô tô',
          metaKeywords: 'bài viết nâng cấp âm thanh, âm thanh ô tô',
          robots: 'index, follow',
        },
        title: 'Nâng cấp âm thanh',
        moTa: 'Danh mục các bài viết về dịch vụ nâng cấp âm thanh ô tô',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Lắp đặt loa',
              metaDescription: 'Các bài viết về lắp đặt loa cho ô tô',
              metaKeywords: 'lắp đặt loa, bài viết loa',
              robots: 'index, follow',
            },
            title: 'Lắp đặt loa',
            slug: 'lap-dat-loa',
          },
          {
            seo: {
              metaTitle: 'Lắp đặt amply',
              metaDescription: 'Các bài viết về lắp đặt amply cho ô tô',
              metaKeywords: 'lắp đặt amply, bài viết amply',
              robots: 'index, follow',
            },
            title: 'Lắp đặt amply',
            slug: 'lap-dat-amply',
          },
          {
            seo: {
              metaTitle: 'Nâng cấp đầu DVD',
              metaDescription: 'Các bài viết về nâng cấp đầu DVD cho ô tô',
              metaKeywords: 'nâng cấp đầu DVD, bài viết đầu DVD',
              robots: 'index, follow',
            },
            title: 'Nâng cấp đầu DVD',
            slug: 'nang-cap-dau-dvd',
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 5. Seed Danh mục sản phẩm
    console.log('📝 Seeding Danh mục sản phẩm...');
    const danhMucSanPham = await strapi.entityService.create('api::danh-muc-san-pham.danh-muc-san-pham', {
      data: {
        seo: {
          metaTitle: 'Phụ kiện nội thất ô tô',
          metaDescription: 'Danh mục các phụ kiện nội thất ô tô chính hãng, đầy đủ và đa dạng',
          metaKeywords: 'phụ kiện nội thất, phụ kiện ô tô, nội thất xe hơi',
          robots: 'index, follow',
        },
        title: 'Phụ kiện nội thất',
        moTa: 'Danh mục các phụ kiện nội thất ô tô chính hãng, đầy đủ và đa dạng',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Ghế và tựa ô tô',
              metaDescription: 'Các sản phẩm ghế và tựa lưng ô tô cao cấp',
              metaKeywords: 'ghế ô tô, tựa lưng, ghế da',
              robots: 'index, follow',
            },
            title: 'Ghế và tựa',
            slug: 'ghe-va-tua',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Ghế da cao cấp',
                  metaDescription: 'Ghế da cao cấp cho ô tô',
                  metaKeywords: 'ghế da, ghế cao cấp',
                  robots: 'index, follow',
                },
                title: 'Ghế da cao cấp',
                slug: 'ghe-da-cao-cap',
              },
              {
                seo: {
                  metaTitle: 'Bọc ghế da',
                  metaDescription: 'Bọc ghế da cho ô tô',
                  metaKeywords: 'bọc ghế da, bọc ghế',
                  robots: 'index, follow',
                },
                title: 'Bọc ghế da',
                slug: 'boc-ghe-da',
              },
              {
                seo: {
                  metaTitle: 'Gối tựa đầu',
                  metaDescription: 'Gối tựa đầu cho ô tô',
                  metaKeywords: 'gối tựa đầu, gối',
                  robots: 'index, follow',
                },
                title: 'Gối tựa đầu',
                slug: 'goi-tua-dau',
              },
              {
                seo: {
                  metaTitle: 'Tựa lưng',
                  metaDescription: 'Tựa lưng cho ô tô',
                  metaKeywords: 'tựa lưng, đệm lưng',
                  robots: 'index, follow',
                },
                title: 'Tựa lưng',
                slug: 'tua-lung',
              },
              {
                seo: {
                  metaTitle: 'Ghế thể thao',
                  metaDescription: 'Ghế thể thao cho ô tô',
                  metaKeywords: 'ghế thể thao, ghế sport',
                  robots: 'index, follow',
                },
                title: 'Ghế thể thao',
                slug: 'ghe-the-thao',
              },
              {
                seo: {
                  metaTitle: 'Bọc ghế nỉ',
                  metaDescription: 'Bọc ghế nỉ cho ô tô',
                  metaKeywords: 'bọc ghế nỉ, bọc ghế vải',
                  robots: 'index, follow',
                },
                title: 'Bọc ghế nỉ',
                slug: 'boc-ghe-ni',
              },
              {
                seo: {
                  metaTitle: 'Gối cổ',
                  metaDescription: 'Gối cổ cho ô tô',
                  metaKeywords: 'gối cổ, đệm cổ',
                  robots: 'index, follow',
                },
                title: 'Gối cổ',
                slug: 'goi-co',
              },
              {
                seo: {
                  metaTitle: 'Đệm ghế',
                  metaDescription: 'Đệm ghế cho ô tô',
                  metaKeywords: 'đệm ghế, lót ghế',
                  robots: 'index, follow',
                },
                title: 'Đệm ghế',
                slug: 'dem-ghe',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Vô lăng ô tô',
              metaDescription: 'Các sản phẩm vô lăng và bọc vô lăng ô tô',
              metaKeywords: 'vô lăng, bọc vô lăng',
              robots: 'index, follow',
            },
            title: 'Vô lăng',
            slug: 'vo-lang',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Vô lăng da',
                  metaDescription: 'Vô lăng da cho ô tô',
                  metaKeywords: 'vô lăng da',
                  robots: 'index, follow',
                },
                title: 'Vô lăng da',
                slug: 'vo-lang-da',
              },
              {
                seo: {
                  metaTitle: 'Bọc vô lăng',
                  metaDescription: 'Bọc vô lăng cho ô tô',
                  metaKeywords: 'bọc vô lăng',
                  robots: 'index, follow',
                },
                title: 'Bọc vô lăng',
                slug: 'boc-vo-lang',
              },
              {
                seo: {
                  metaTitle: 'Vô lăng thể thao',
                  metaDescription: 'Vô lăng thể thao cho ô tô',
                  metaKeywords: 'vô lăng thể thao, vô lăng sport',
                  robots: 'index, follow',
                },
                title: 'Vô lăng thể thao',
                slug: 'vo-lang-the-thao',
              },
              {
                seo: {
                  metaTitle: 'Vô lăng carbon',
                  metaDescription: 'Vô lăng carbon cho ô tô',
                  metaKeywords: 'vô lăng carbon',
                  robots: 'index, follow',
                },
                title: 'Vô lăng carbon',
                slug: 'vo-lang-carbon',
              },
              {
                seo: {
                  metaTitle: 'Bọc vô lăng da lộn',
                  metaDescription: 'Bọc vô lăng da lộn cho ô tô',
                  metaKeywords: 'bọc vô lăng da lộn',
                  robots: 'index, follow',
                },
                title: 'Bọc vô lăng da lộn',
                slug: 'boc-vo-lang-da-lon',
              },
              {
                seo: {
                  metaTitle: 'Vô lăng gỗ',
                  metaDescription: 'Vô lăng gỗ cho ô tô',
                  metaKeywords: 'vô lăng gỗ',
                  robots: 'index, follow',
                },
                title: 'Vô lăng gỗ',
                slug: 'vo-lang-go',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Thảm và trang trí nội thất ô tô',
              metaDescription: 'Các sản phẩm thảm và đồ trang trí nội thất ô tô',
              metaKeywords: 'thảm ô tô, trang trí nội thất',
              robots: 'index, follow',
            },
            title: 'Thảm và trang trí',
            slug: 'tham-va-trang-tri',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Thảm sàn cao cấp',
                  metaDescription: 'Thảm sàn cao cấp cho ô tô',
                  metaKeywords: 'thảm sàn, thảm cao cấp',
                  robots: 'index, follow',
                },
                title: 'Thảm sàn cao cấp',
                slug: 'tham-san-cao-cap',
              },
              {
                seo: {
                  metaTitle: 'Thảm lót sàn',
                  metaDescription: 'Thảm lót sàn cho ô tô',
                  metaKeywords: 'thảm lót sàn',
                  robots: 'index, follow',
                },
                title: 'Thảm lót sàn',
                slug: 'tham-lot-san',
              },
              {
                seo: {
                  metaTitle: 'Túi đựng đồ',
                  metaDescription: 'Túi đựng đồ cho ô tô',
                  metaKeywords: 'túi đựng đồ',
                  robots: 'index, follow',
                },
                title: 'Túi đựng đồ',
                slug: 'tui-dung-do',
              },
              {
                seo: {
                  metaTitle: 'Đồ trang trí nội thất',
                  metaDescription: 'Đồ trang trí nội thất cho ô tô',
                  metaKeywords: 'trang trí nội thất',
                  robots: 'index, follow',
                },
                title: 'Đồ trang trí nội thất',
                slug: 'do-trang-tri-noi-that',
              },
              {
                seo: {
                  metaTitle: 'Thảm sàn 3D',
                  metaDescription: 'Thảm sàn 3D cho ô tô',
                  metaKeywords: 'thảm sàn 3D',
                  robots: 'index, follow',
                },
                title: 'Thảm sàn 3D',
                slug: 'tham-san-3d',
              },
              {
                seo: {
                  metaTitle: 'Thảm lót khoang hành lý',
                  metaDescription: 'Thảm lót khoang hành lý cho ô tô',
                  metaKeywords: 'thảm lót khoang hành lý',
                  robots: 'index, follow',
                },
                title: 'Thảm lót khoang hành lý',
                slug: 'tham-lot-khoang-hanh-ly',
              },
              {
                seo: {
                  metaTitle: 'Túi đựng đồ đa năng',
                  metaDescription: 'Túi đựng đồ đa năng cho ô tô',
                  metaKeywords: 'túi đựng đồ đa năng',
                  robots: 'index, follow',
                },
                title: 'Túi đựng đồ đa năng',
                slug: 'tui-dung-do-da-nang',
              },
              {
                seo: {
                  metaTitle: 'Hộp đựng khăn giấy',
                  metaDescription: 'Hộp đựng khăn giấy cho ô tô',
                  metaKeywords: 'hộp đựng khăn giấy',
                  robots: 'index, follow',
                },
                title: 'Hộp đựng khăn giấy',
                slug: 'hop-dung-khan-giay',
              },
            ],
          },
        ],
        publishedAt: new Date(),
      },
    });

    // Seed Danh mục sản phẩm - Phụ kiện ngoại thất
    console.log('📝 Seeding Danh mục sản phẩm - Phụ kiện ngoại thất...');
    await strapi.entityService.create('api::danh-muc-san-pham.danh-muc-san-pham', {
      data: {
        seo: {
          metaTitle: 'Phụ kiện ngoại thất ô tô',
          metaDescription: 'Danh mục các phụ kiện ngoại thất ô tô chính hãng, đầy đủ và đa dạng',
          metaKeywords: 'phụ kiện ngoại thất, phụ kiện ô tô, ngoại thất xe hơi',
          robots: 'index, follow',
        },
        title: 'Phụ kiện ngoại thất',
        moTa: 'Danh mục các phụ kiện ngoại thất ô tô chính hãng, đầy đủ và đa dạng',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Cản và ốp ô tô',
              metaDescription: 'Các sản phẩm cản và ốp ô tô cao cấp',
              metaKeywords: 'cản ô tô, ốp viền, chắn bùn',
              robots: 'index, follow',
            },
            title: 'Cản và ốp',
            slug: 'can-va-op',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Cản trước',
                  metaDescription: 'Cản trước cho ô tô',
                  metaKeywords: 'cản trước, cản xe',
                  robots: 'index, follow',
                },
                title: 'Cản trước',
                slug: 'can-truoc',
              },
              {
                seo: {
                  metaTitle: 'Cản sau',
                  metaDescription: 'Cản sau cho ô tô',
                  metaKeywords: 'cản sau, cản xe',
                  robots: 'index, follow',
                },
                title: 'Cản sau',
                slug: 'can-sau',
              },
              {
                seo: {
                  metaTitle: 'Ốp viền',
                  metaDescription: 'Ốp viền cho ô tô',
                  metaKeywords: 'ốp viền, viền xe',
                  robots: 'index, follow',
                },
                title: 'Ốp viền',
                slug: 'op-vien',
              },
              {
                seo: {
                  metaTitle: 'Chắn bùn',
                  metaDescription: 'Chắn bùn cho ô tô',
                  metaKeywords: 'chắn bùn, chắn bùn xe',
                  robots: 'index, follow',
                },
                title: 'Chắn bùn',
                slug: 'chan-bun',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Đèn và chiếu sáng ô tô',
              metaDescription: 'Các sản phẩm đèn và chiếu sáng ô tô',
              metaKeywords: 'đèn ô tô, đèn LED, chiếu sáng',
              robots: 'index, follow',
            },
            title: 'Đèn và chiếu sáng',
            slug: 'den-va-chieu-sang',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Đèn pha LED',
                  metaDescription: 'Đèn pha LED cho ô tô',
                  metaKeywords: 'đèn pha LED, đèn LED',
                  robots: 'index, follow',
                },
                title: 'Đèn pha LED',
                slug: 'den-pha-led',
              },
              {
                seo: {
                  metaTitle: 'Đèn gầm',
                  metaDescription: 'Đèn gầm cho ô tô',
                  metaKeywords: 'đèn gầm, đèn sương mù',
                  robots: 'index, follow',
                },
                title: 'Đèn gầm',
                slug: 'den-gam',
              },
              {
                seo: {
                  metaTitle: 'Đèn hậu',
                  metaDescription: 'Đèn hậu cho ô tô',
                  metaKeywords: 'đèn hậu, đèn sau',
                  robots: 'index, follow',
                },
                title: 'Đèn hậu',
                slug: 'den-hau',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Gương và phụ kiện ô tô',
              metaDescription: 'Các sản phẩm gương và phụ kiện ô tô',
              metaKeywords: 'gương ô tô, gương chiếu hậu, logo nổi',
              robots: 'index, follow',
            },
            title: 'Gương và phụ kiện',
            slug: 'guong-va-phu-kien',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Gương chiếu hậu',
                  metaDescription: 'Gương chiếu hậu cho ô tô',
                  metaKeywords: 'gương chiếu hậu, gương xe',
                  robots: 'index, follow',
                },
                title: 'Gương chiếu hậu',
                slug: 'guong-chieu-hau',
              },
              {
                seo: {
                  metaTitle: 'Logo nổi',
                  metaDescription: 'Logo nổi cho ô tô',
                  metaKeywords: 'logo nổi, logo xe',
                  robots: 'index, follow',
                },
                title: 'Logo nổi',
                slug: 'logo-noi',
              },
              {
                seo: {
                  metaTitle: 'Viền gương',
                  metaDescription: 'Viền gương cho ô tô',
                  metaKeywords: 'viền gương, ốp gương',
                  robots: 'index, follow',
                },
                title: 'Viền gương',
                slug: 'vien-guong',
              },
            ],
          },
        ],
        publishedAt: new Date(),
      },
    });

    // Seed Danh mục sản phẩm - Đồ chơi xe hơi
    console.log('📝 Seeding Danh mục sản phẩm - Đồ chơi xe hơi...');
    await strapi.entityService.create('api::danh-muc-san-pham.danh-muc-san-pham', {
      data: {
        seo: {
          metaTitle: 'Đồ chơi xe hơi',
          metaDescription: 'Danh mục các đồ chơi và phụ kiện điện tử cho xe hơi chính hãng',
          metaKeywords: 'đồ chơi xe hơi, phụ kiện điện tử, camera, âm thanh',
          robots: 'index, follow',
        },
        title: 'Đồ chơi xe hơi',
        moTa: 'Danh mục các đồ chơi và phụ kiện điện tử cho xe hơi chính hãng',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Camera và an ninh ô tô',
              metaDescription: 'Các sản phẩm camera và hệ thống an ninh cho ô tô',
              metaKeywords: 'camera hành trình, camera lùi, cảm biến, báo động',
              robots: 'index, follow',
            },
            title: 'Camera và an ninh',
            slug: 'camera-va-an-ninh',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Camera hành trình',
                  metaDescription: 'Camera hành trình cho ô tô',
                  metaKeywords: 'camera hành trình, dashcam',
                  robots: 'index, follow',
                },
                title: 'Camera hành trình',
                slug: 'camera-hanh-trinh',
              },
              {
                seo: {
                  metaTitle: 'Camera lùi',
                  metaDescription: 'Camera lùi cho ô tô',
                  metaKeywords: 'camera lùi, backup camera',
                  robots: 'index, follow',
                },
                title: 'Camera lùi',
                slug: 'camera-lui',
              },
              {
                seo: {
                  metaTitle: 'Cảm biến lùi',
                  metaDescription: 'Cảm biến lùi cho ô tô',
                  metaKeywords: 'cảm biến lùi, parking sensor',
                  robots: 'index, follow',
                },
                title: 'Cảm biến lùi',
                slug: 'cam-bien-lui',
              },
              {
                seo: {
                  metaTitle: 'Hệ thống báo động',
                  metaDescription: 'Hệ thống báo động cho ô tô',
                  metaKeywords: 'báo động, alarm system',
                  robots: 'index, follow',
                },
                title: 'Hệ thống báo động',
                slug: 'he-thong-bao-dong',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Âm thanh ô tô',
              metaDescription: 'Các sản phẩm âm thanh cho ô tô',
              metaKeywords: 'đầu DVD, loa, amply, subwoofer',
              robots: 'index, follow',
            },
            title: 'Âm thanh',
            slug: 'am-thanh',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Đầu DVD Android',
                  metaDescription: 'Đầu DVD Android cho ô tô',
                  metaKeywords: 'đầu DVD Android, Android car stereo',
                  robots: 'index, follow',
                },
                title: 'Đầu DVD Android',
                slug: 'dau-dvd-android',
              },
              {
                seo: {
                  metaTitle: 'Loa & Amply',
                  metaDescription: 'Loa và Amply cho ô tô',
                  metaKeywords: 'loa, amply, speaker, amplifier',
                  robots: 'index, follow',
                },
                title: 'Loa & Amply',
                slug: 'loa-amply',
              },
              {
                seo: {
                  metaTitle: 'Loa siêu trầm',
                  metaDescription: 'Loa siêu trầm cho ô tô',
                  metaKeywords: 'loa siêu trầm, subwoofer',
                  robots: 'index, follow',
                },
                title: 'Loa siêu trầm',
                slug: 'loa-sieu-tram',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Tiện ích ô tô',
              metaDescription: 'Các sản phẩm tiện ích cho ô tô',
              metaKeywords: 'HUD, sạc USB, sạc không dây, tiện ích',
              robots: 'index, follow',
            },
            title: 'Tiện ích',
            slug: 'tien-ich',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'HUD hiển thị',
                  metaDescription: 'HUD hiển thị cho ô tô',
                  metaKeywords: 'HUD, head-up display',
                  robots: 'index, follow',
                },
                title: 'HUD hiển thị',
                slug: 'hud-hien-thi',
              },
              {
                seo: {
                  metaTitle: 'Bộ sạc USB',
                  metaDescription: 'Bộ sạc USB cho ô tô',
                  metaKeywords: 'sạc USB, USB charger',
                  robots: 'index, follow',
                },
                title: 'Bộ sạc USB',
                slug: 'bo-sac-usb',
              },
              {
                seo: {
                  metaTitle: 'Sạc không dây',
                  metaDescription: 'Sạc không dây cho ô tô',
                  metaKeywords: 'sạc không dây, wireless charger',
                  robots: 'index, follow',
                },
                title: 'Sạc không dây',
                slug: 'sac-khong-day',
              },
            ],
          },
        ],
        publishedAt: new Date(),
      },
    });

    // Seed Danh mục sản phẩm - Bảo dưỡng
    console.log('📝 Seeding Danh mục sản phẩm - Bảo dưỡng...');
    await strapi.entityService.create('api::danh-muc-san-pham.danh-muc-san-pham', {
      data: {
        seo: {
          metaTitle: 'Bảo dưỡng ô tô',
          metaDescription: 'Danh mục các sản phẩm bảo dưỡng và phụ tùng thay thế cho ô tô',
          metaKeywords: 'bảo dưỡng ô tô, dầu nhớt, lọc, phụ tùng',
          robots: 'index, follow',
        },
        title: 'Bảo dưỡng',
        moTa: 'Danh mục các sản phẩm bảo dưỡng và phụ tùng thay thế cho ô tô',
        danhMucCapHai: [
          {
            seo: {
              metaTitle: 'Dầu nhớt ô tô',
              metaDescription: 'Các sản phẩm dầu nhớt và phụ gia cho ô tô',
              metaKeywords: 'dầu nhớt, dầu động cơ, dầu hộp số, phụ gia',
              robots: 'index, follow',
            },
            title: 'Dầu nhớt',
            slug: 'dau-nhot',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Dầu nhớt động cơ',
                  metaDescription: 'Dầu nhớt động cơ cho ô tô',
                  metaKeywords: 'dầu nhớt động cơ, engine oil',
                  robots: 'index, follow',
                },
                title: 'Dầu nhớt động cơ',
                slug: 'dau-nhot-dong-co',
              },
              {
                seo: {
                  metaTitle: 'Dầu hộp số',
                  metaDescription: 'Dầu hộp số cho ô tô',
                  metaKeywords: 'dầu hộp số, transmission fluid',
                  robots: 'index, follow',
                },
                title: 'Dầu hộp số',
                slug: 'dau-hop-so',
              },
              {
                seo: {
                  metaTitle: 'Phụ gia',
                  metaDescription: 'Phụ gia cho ô tô',
                  metaKeywords: 'phụ gia, additives',
                  robots: 'index, follow',
                },
                title: 'Phụ gia',
                slug: 'phu-gia',
              },
            ],
          },
          {
            seo: {
              metaTitle: 'Lọc và phụ tùng ô tô',
              metaDescription: 'Các sản phẩm lọc và phụ tùng thay thế cho ô tô',
              metaKeywords: 'lọc gió, lọc nhớt, phụ tùng thay thế',
              robots: 'index, follow',
            },
            title: 'Lọc và phụ tùng',
            slug: 'loc-va-phu-tung',
            danhMucCapBa: [
              {
                seo: {
                  metaTitle: 'Lọc gió',
                  metaDescription: 'Lọc gió cho ô tô',
                  metaKeywords: 'lọc gió, air filter',
                  robots: 'index, follow',
                },
                title: 'Lọc gió',
                slug: 'loc-gio',
              },
              {
                seo: {
                  metaTitle: 'Lọc nhớt',
                  metaDescription: 'Lọc nhớt cho ô tô',
                  metaKeywords: 'lọc nhớt, oil filter',
                  robots: 'index, follow',
                },
                title: 'Lọc nhớt',
                slug: 'loc-nhot',
              },
              {
                seo: {
                  metaTitle: 'Phụ tùng thay thế',
                  metaDescription: 'Phụ tùng thay thế cho ô tô',
                  metaKeywords: 'phụ tùng thay thế, replacement parts',
                  robots: 'index, follow',
                },
                title: 'Phụ tùng thay thế',
                slug: 'phu-tung-thay-the',
              },
            ],
          },
        ],
        publishedAt: new Date(),
      },
    });

    // 6. Seed Sản phẩm (30 sản phẩm)
    console.log('📝 Seeding Sản phẩm (30 sản phẩm)...');
    const sanPhamData = [
      // Phụ kiện nội thất - Ghế và tựa
      { title: 'Ghế da cao cấp Mercedes-Benz', giaGoc: 15000000, giaBan: 12000000, thongSo: [{ label: 'Thương hiệu', value: 'Mercedes-Benz' }, { label: 'Chất liệu', value: 'Da thật' }, { label: 'Bảo hành', value: '3 năm' }] },
      { title: 'Bọc ghế da thật cao cấp', giaGoc: 8000000, giaBan: 6500000, thongSo: [{ label: 'Thương hiệu', value: 'Premium' }, { label: 'Chất liệu', value: 'Da thật' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Gối tựa đầu da lộn cao cấp', giaGoc: 1200000, giaBan: 990000, thongSo: [{ label: 'Thương hiệu', value: 'AutoLux' }, { label: 'Chất liệu', value: 'Da lộn' }, { label: 'Kích thước', value: 'Universal' }] },
      { title: 'Tựa lưng massage cho lái xe', giaGoc: 2500000, giaBan: 1990000, thongSo: [{ label: 'Thương hiệu', value: 'Comfort' }, { label: 'Tính năng', value: 'Massage' }, { label: 'Bảo hành', value: '1 năm' }] },
      { title: 'Ghế thể thao Recaro chính hãng', giaGoc: 20000000, giaBan: 17500000, thongSo: [{ label: 'Thương hiệu', value: 'Recaro' }, { label: 'Loại', value: 'Thể thao' }, { label: 'Bảo hành', value: '5 năm' }] },
      { title: 'Bọc ghế nỉ cao cấp', giaGoc: 4500000, giaBan: 3500000, thongSo: [{ label: 'Thương hiệu', value: 'Premium' }, { label: 'Chất liệu', value: 'Nỉ cao cấp' }, { label: 'Bảo hành', value: '1 năm' }] },
      { title: 'Gối cổ memory foam', giaGoc: 800000, giaBan: 650000, thongSo: [{ label: 'Thương hiệu', value: 'Memory' }, { label: 'Chất liệu', value: 'Memory foam' }, { label: 'Kích thước', value: 'Universal' }] },
      { title: 'Đệm ghế lót sưởi ấm', giaGoc: 1800000, giaBan: 1490000, thongSo: [{ label: 'Thương hiệu', value: 'WarmSeat' }, { label: 'Tính năng', value: 'Sưởi ấm' }, { label: 'Bảo hành', value: '1 năm' }] },
      // Phụ kiện nội thất - Vô lăng
      { title: 'Vô lăng da Nappa cao cấp', giaGoc: 3500000, giaBan: 2900000, thongSo: [{ label: 'Thương hiệu', value: 'Premium' }, { label: 'Chất liệu', value: 'Da Nappa' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Bọc vô lăng da lộn thể thao', giaGoc: 1200000, giaBan: 990000, thongSo: [{ label: 'Thương hiệu', value: 'Sport' }, { label: 'Chất liệu', value: 'Da lộn' }, { label: 'Kích thước', value: 'Universal' }] },
      { title: 'Vô lăng thể thao Momo', giaGoc: 5500000, giaBan: 4500000, thongSo: [{ label: 'Thương hiệu', value: 'Momo' }, { label: 'Loại', value: 'Thể thao' }, { label: 'Bảo hành', value: '3 năm' }] },
      { title: 'Vô lăng carbon fiber', giaGoc: 8000000, giaBan: 6800000, thongSo: [{ label: 'Thương hiệu', value: 'CarbonPro' }, { label: 'Chất liệu', value: 'Carbon fiber' }, { label: 'Bảo hành', value: '5 năm' }] },
      { title: 'Vô lăng gỗ tự nhiên', giaGoc: 4200000, giaBan: 3500000, thongSo: [{ label: 'Thương hiệu', value: 'WoodCraft' }, { label: 'Chất liệu', value: 'Gỗ tự nhiên' }, { label: 'Bảo hành', value: '2 năm' }] },
      // Phụ kiện nội thất - Thảm và trang trí
      { title: 'Thảm sàn cao cấp 3D', giaGoc: 2500000, giaBan: 1990000, thongSo: [{ label: 'Thương hiệu', value: '3DMat' }, { label: 'Chất liệu', value: 'PVC cao cấp' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Thảm lót sàn WeatherTech', giaGoc: 3200000, giaBan: 2700000, thongSo: [{ label: 'Thương hiệu', value: 'WeatherTech' }, { label: 'Chất liệu', value: 'Rubber' }, { label: 'Bảo hành', value: '3 năm' }] },
      { title: 'Túi đựng đồ đa năng', giaGoc: 800000, giaBan: 650000, thongSo: [{ label: 'Thương hiệu', value: 'Organizer' }, { label: 'Chất liệu', value: 'Vải bền' }, { label: 'Kích thước', value: 'Đa dạng' }] },
      { title: 'Hộp đựng khăn giấy gỗ', giaGoc: 450000, giaBan: 350000, thongSo: [{ label: 'Thương hiệu', value: 'WoodBox' }, { label: 'Chất liệu', value: 'Gỗ' }, { label: 'Kích thước', value: 'Universal' }] },
      // Phụ kiện ngoại thất
      { title: 'Cản trước thể thao', giaGoc: 12000000, giaBan: 9800000, thongSo: [{ label: 'Thương hiệu', value: 'SportLine' }, { label: 'Chất liệu', value: 'ABS' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Cản sau carbon', giaGoc: 15000000, giaBan: 12500000, thongSo: [{ label: 'Thương hiệu', value: 'CarbonPro' }, { label: 'Chất liệu', value: 'Carbon' }, { label: 'Bảo hành', value: '5 năm' }] },
      { title: 'Đèn pha LED H7', giaGoc: 3500000, giaBan: 2800000, thongSo: [{ label: 'Thương hiệu', value: 'LEDPro' }, { label: 'Công suất', value: '60W' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Gương chiếu hậu tự động', giaGoc: 2500000, giaBan: 1990000, thongSo: [{ label: 'Thương hiệu', value: 'AutoMirror' }, { label: 'Tính năng', value: 'Tự động' }, { label: 'Bảo hành', value: '1 năm' }] },
      { title: 'Logo nổi Mercedes-Benz', giaGoc: 1200000, giaBan: 990000, thongSo: [{ label: 'Thương hiệu', value: 'Mercedes-Benz' }, { label: 'Chất liệu', value: 'Chrome' }, { label: 'Kích thước', value: 'OEM' }] },
      { title: 'Chắn bùn cao cấp', giaGoc: 1800000, giaBan: 1490000, thongSo: [{ label: 'Thương hiệu', value: 'MudGuard' }, { label: 'Chất liệu', value: 'ABS' }, { label: 'Bảo hành', value: '1 năm' }] },
      // Đồ chơi xe hơi
      { title: 'Camera hành trình 4K', giaGoc: 3500000, giaBan: 2800000, thongSo: [{ label: 'Thương hiệu', value: 'DashCam' }, { label: 'Độ phân giải', value: '4K' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Cảm biến lùi 8 điểm', giaGoc: 2500000, giaBan: 1990000, thongSo: [{ label: 'Thương hiệu', value: 'ParkSensor' }, { label: 'Số điểm', value: '8 điểm' }, { label: 'Bảo hành', value: '1 năm' }] },
      { title: 'HUD hiển thị thông minh', giaGoc: 4500000, giaBan: 3800000, thongSo: [{ label: 'Thương hiệu', value: 'SmartHUD' }, { label: 'Tính năng', value: 'Hiển thị thông minh' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Đầu DVD Android 10 inch', giaGoc: 8000000, giaBan: 6800000, thongSo: [{ label: 'Thương hiệu', value: 'AndroidCar' }, { label: 'Màn hình', value: '10 inch' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Loa JBL 6.5 inch', giaGoc: 2500000, giaBan: 1990000, thongSo: [{ label: 'Thương hiệu', value: 'JBL' }, { label: 'Kích thước', value: '6.5 inch' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Amply 4 kênh 1000W', giaGoc: 5500000, giaBan: 4500000, thongSo: [{ label: 'Thương hiệu', value: 'AmpPro' }, { label: 'Công suất', value: '1000W' }, { label: 'Bảo hành', value: '2 năm' }] },
      { title: 'Bộ sạc USB 4 cổng', giaGoc: 450000, giaBan: 350000, thongSo: [{ label: 'Thương hiệu', value: 'USBPro' }, { label: 'Số cổng', value: '4 cổng' }, { label: 'Bảo hành', value: '1 năm' }] },
      { title: 'Sạc không dây 15W', giaGoc: 800000, giaBan: 650000, thongSo: [{ label: 'Thương hiệu', value: 'Wireless' }, { label: 'Công suất', value: '15W' }, { label: 'Bảo hành', value: '1 năm' }] },
    ];

    const sanPhams = await Promise.all(
      sanPhamData.map((item) => {
        return strapi.entityService.create('api::san-pham.san-pham', {
          data: {
            seo: {
              metaTitle: `${item.title} chính hãng`,
              metaDescription: `${item.title} chính hãng, chất lượng cao, giá tốt nhất thị trường`,
              metaKeywords: `${item.title.toLowerCase()}, phụ kiện ô tô, chính hãng`,
              robots: 'index, follow',
            },
            title: item.title,
            moTaNgan: `${item.title} chính hãng, chất lượng cao, bảo hành đầy đủ. Sản phẩm được nhập khẩu trực tiếp từ nhà sản xuất.`,
            giaGoc: item.giaGoc,
            giaBan: item.giaBan,
            moTaChiTiet: `<p>Mô tả chi tiết về ${item.title.toLowerCase()}...</p><p>Sản phẩm chính hãng, chất lượng cao, phù hợp với mọi dòng xe.</p>`,
            thongSo: item.thongSo,
            publishedAt: new Date(),
          },
        });
      })
    );

    // Note: Linking sản phẩm và blog vào danh mục component nested is complex
    // Please link manually in Strapi admin:
    // - Sản phẩm: Edit danh mục cấp 3 → Add sản phẩm vào field "San Phams"
    // - Blog: Edit danh mục cấp 2 (bài viết) → Add blog vào field "Bai Viets"
    console.log(`✅ Created ${sanPhams.length} sản phẩm and ${blogs.length} blogs`);
    console.log('💡 Please link them to categories manually in Strapi admin');

    console.log('✅ Seed data completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  }
}

