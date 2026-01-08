# 📚 HƯỚNG DẪN QUẢN LÝ CONTENT - AUTO TUAN LINH CMS

## Mục lục
1. [Giới thiệu](#giới-thiệu)
2. [Đăng nhập vào hệ thống](#đăng-nhập-vào-hệ-thống)
3. [Tổng quan về cấu trúc](#tổng-quan-về-cấu-trúc)
4. [Hướng dẫn quản lý Single Types](#hướng-dẫn-quản-lý-single-types)
5. [Hướng dẫn quản lý Collection Types](#hướng-dẫn-quản-lý-collection-types)
6. [Hướng dẫn về SEO](#hướng-dẫn-về-seo)
7. [Draft & Publish](#draft--publish)
8. [Các lưu ý quan trọng](#các-lưu-ý-quan-trọng)

---

## Giới thiệu

Chào mừng bạn đến với hệ thống quản lý nội dung (CMS) của Auto Tuan Linh! Tài liệu này sẽ hướng dẫn bạn cách sử dụng Strapi để quản lý toàn bộ nội dung trên website.

### Strapi là gì?
Strapi là một hệ thống quản lý nội dung (CMS) cho phép bạn chỉnh sửa, thêm mới và quản lý nội dung website mà không cần biết lập trình.

### Các loại nội dung trong hệ thống

Hệ thống có 2 loại nội dung chính:

1. **Single Types (Loại đơn)**: Mỗi loại chỉ có 1 bản ghi duy nhất
   - Trang chủ (Home)
   - Footer
   - Footer Contact
   - Về chúng tôi
   - Liên hệ

2. **Collection Types (Loại tập hợp)**: Có thể tạo nhiều bản ghi
   - Sản phẩm
   - Blog
   - Danh mục sản phẩm
   - Danh mục bài viết
   - Đơn hàng
   - Newsletter Subscription

---

## Đăng nhập vào hệ thống

1. Truy cập địa chỉ: `http://localhost:1337/admin` (hoặc địa chỉ server của bạn)
2. Nhập **Email** và **Mật khẩu** đã được cấp
3. Click **Login** để đăng nhập

---

## Tổng quan về cấu trúc

### Sidebar Menu

Sau khi đăng nhập, bạn sẽ thấy menu bên trái với các mục:

- **Content Manager**: Quản lý nội dung
- **Content-Type Builder**: Xây dựng cấu trúc (chỉ dành cho Admin)
- **Media Library**: Thư viện hình ảnh/video
- **Settings**: Cài đặt hệ thống

### Content Manager

Trong **Content Manager**, bạn sẽ thấy 2 phần:

1. **Single Types**: Các trang đơn (Home, Footer, v.v.)
2. **Collection Types**: Các loại nội dung có thể tạo nhiều (Sản phẩm, Blog, v.v.)

---

## Hướng dẫn quản lý Single Types

Single Types là các trang chỉ có 1 bản ghi duy nhất. Khi bạn mở một Single Type, bạn sẽ thấy nội dung hiện tại và có thể chỉnh sửa trực tiếp.

### 1. Trang chủ (Home)

**Vị trí**: Content Manager → Single Types → Home

Trang chủ chứa nhiều sections (phần) khác nhau:

#### Các sections có trong Home:

1. **SEO** (Bắt buộc)
   - Thông tin SEO cho trang chủ

2. **Hero Slider** (Slider đầu trang)
   - **Mục đích**: Hiển thị slider/banner lớn ở đầu trang chủ, thu hút sự chú ý của khách hàng
   - **Có thể thêm nhiều slide**: Click "Add an entry" để thêm slide mới
   - **Các trường trong mỗi slide**:
     - **Title** (Tiêu đề): Tiêu đề chính của slide
       - Ví dụ: "Phụ kiện ô tô chính hãng"
       - Không bắt buộc
     - **Special Title** (Tiêu đề đặc biệt): Tiêu đề nổi bật, thường dùng để highlight
       - Ví dụ: "KHUYẾN MÃI ĐẶC BIỆT"
       - Không bắt buộc
     - **Subtitle** (Phụ đề): Dòng phụ đề dưới tiêu đề
       - Ví dụ: "Giảm giá lên đến 50%"
       - Không bắt buộc
     - **Description** (Mô tả): Mô tả chi tiết về slide
       - Ví dụ: "Khám phá bộ sưu tập phụ kiện ô tô cao cấp với giá ưu đãi"
       - Không bắt buộc
     - **URL** (Liên kết): Link khi click vào slide
       - Ví dụ: "/san-pham" hoặc "https://example.com"
       - Không bắt buộc
     - **Image** (Hình ảnh): Ảnh nền của slide
       - **Bắt buộc có ảnh** để slide hiển thị đẹp
       - Khuyến nghị: Kích thước 1920x1080px hoặc lớn hơn
       - Chỉ chấp nhận file ảnh (JPG, PNG, WebP)

3. **Feature Cards** (Thẻ tính năng)
   - **Mục đích**: Hiển thị các tính năng/ưu điểm nổi bật của công ty
   - **Có thể thêm nhiều thẻ**: Thường hiển thị 3-4 thẻ
   - **Các trường trong mỗi thẻ**:
     - **Icon** (Biểu tượng): Icon/hình ảnh đại diện cho tính năng
       - Ví dụ: Icon bảo hành, icon giao hàng nhanh
       - Không bắt buộc nhưng nên có để đẹp hơn
       - Chỉ chấp nhận file ảnh
     - **Title** (Tiêu đề) - **BẮT BUỘC**
       - Tên tính năng
       - Ví dụ: "Giao hàng nhanh", "Bảo hành chính hãng"
     - **Description** (Mô tả): Mô tả ngắn về tính năng
       - Ví dụ: "Giao hàng trong vòng 24h tại TP.HCM"
       - Không bắt buộc

4. **Why Choose Us** (Tại sao chọn chúng tôi)
   - **Mục đích**: Section giải thích lý do khách hàng nên chọn công ty
   - **Các trường**:
     - **Title** (Tiêu đề): Mặc định "Tại sao chọn Auto Tuan Linh?"
       - Có thể thay đổi
       - Không bắt buộc
     - **Subtitle** (Phụ đề): Dòng mô tả ngắn
       - Ví dụ: "Cam kết mang đến trải nghiệm tốt nhất"
       - Không bắt buộc
     - **Feature Cards** (Danh sách thẻ tính năng): Repeatable
       - Sử dụng lại component Feature Card (giống section 3)
       - Có thể thêm nhiều thẻ
       - Mỗi thẻ có: Icon, Title (bắt buộc), Description

5. **Stats Section** (Phần thống kê)
   - **Mục đích**: Hiển thị các con số ấn tượng (số khách hàng, số năm kinh nghiệm, v.v.)
   - **Các trường**:
     - **Stat Cards** (Danh sách thẻ số liệu): Repeatable
       - Có thể thêm nhiều thẻ (thường 3-4 thẻ)
       - **Mỗi thẻ có**:
         - **Icon** (Biểu tượng): Icon đại diện
           - Không bắt buộc
           - Chỉ chấp nhận file ảnh
         - **Number** (Số) - **BẮT BUỘC**
           - Số liệu cần hiển thị
           - Ví dụ: "10000+", "15", "5000"
           - **Lưu ý**: Nhập dạng text, có thể thêm dấu "+" hoặc ký tự khác
         - **Text** (Văn bản) - **BẮT BUỘC**
           - Mô tả cho số liệu
           - Ví dụ: "Khách hàng", "Năm kinh nghiệm", "Sản phẩm"

6. **Gallery Section** (Phần thư viện ảnh)
   - **Mục đích**: Hiển thị gallery hình ảnh về công ty, sản phẩm, showroom
   - **Các trường**:
     - **Title** (Tiêu đề): Tiêu đề section
       - Ví dụ: "Hình ảnh thực tế"
       - Không bắt buộc
     - **Subtitle** (Phụ đề): Mô tả ngắn
       - Ví dụ: "Khám phá không gian và sản phẩm của chúng tôi"
       - Không bắt buộc
     - **Images** (Danh sách hình ảnh): Repeatable
       - Có thể thêm nhiều ảnh
       - **Mỗi ảnh có**:
         - **Image** (Hình ảnh) - **BẮT BUỘC**
           - Ảnh trong gallery
           - Chỉ chấp nhận file ảnh
           - Khuyến nghị: Kích thước đồng đều để đẹp hơn
         - **Alt** (Alt text) - **BẮT BUỘC**
           - Mô tả ảnh cho SEO và người dùng khiếm thị
           - Ví dụ: "Showroom Auto Tuan Linh tại TP.HCM"
           - **Quan trọng cho SEO!**

7. **Partner Brands Section** (Phần thương hiệu đối tác)
   - **Mục đích**: Hiển thị logo các thương hiệu đối tác
   - **Các trường**:
     - **Title** (Tiêu đề): Tiêu đề section
       - Ví dụ: "Thương hiệu đối tác"
       - Không bắt buộc
     - **Subtitle** (Phụ đề): Mô tả ngắn
       - Ví dụ: "Đối tác tin cậy của các thương hiệu hàng đầu"
       - Không bắt buộc
     - **Partner Brands** (Danh sách thương hiệu): Repeatable
       - Có thể thêm nhiều thương hiệu
       - **Mỗi thương hiệu có**:
         - **Name** (Tên) - **BẮT BUỘC**
           - Tên thương hiệu
           - Ví dụ: "3M", "Llumar", "V-Kool"
         - **Logo** (Logo) - **BẮT BUỘC**
           - Logo của thương hiệu
           - Chỉ chấp nhận file ảnh
           - Khuyến nghị: Logo nền trong suốt (PNG), kích thước đồng đều
         - **URL** (Liên kết): Link đến website thương hiệu
           - Ví dụ: "https://www.3m.com"
           - Không bắt buộc

8. **Process Section** (Phần quy trình)
   - **Mục đích**: Hiển thị quy trình mua hàng/sử dụng dịch vụ
   - **Các trường**:
     - **Title** (Tiêu đề): Tiêu đề section
       - Ví dụ: "Quy trình mua hàng"
       - Không bắt buộc
     - **Subtitle** (Phụ đề): Mô tả ngắn
       - Ví dụ: "4 bước đơn giản để sở hữu sản phẩm"
       - Không bắt buộc
     - **Steps** (Danh sách các bước): Repeatable
       - Có thể thêm nhiều bước (thường 3-5 bước)
       - **Mỗi bước có**:
         - **Step Number** (Số bước) - **BẮT BUỘC**
           - Số thứ tự của bước
           - Tối thiểu: 1
           - Ví dụ: 1, 2, 3, 4
         - **Icon** (Biểu tượng): Icon đại diện cho bước
           - Không bắt buộc
           - Chỉ chấp nhận file ảnh
         - **Title** (Tiêu đề) - **BẮT BUỘC**
           - Tên của bước
           - Ví dụ: "Chọn sản phẩm", "Đặt hàng", "Thanh toán", "Nhận hàng"
         - **Description** (Mô tả): Mô tả chi tiết bước
           - Ví dụ: "Tìm kiếm và chọn sản phẩm phù hợp với nhu cầu"
           - Không bắt buộc

9. **FAQ Section** (Phần câu hỏi thường gặp)
   - **Mục đích**: Trả lời các câu hỏi thường gặp của khách hàng
   - **Các trường**:
     - **Icon** (Biểu tượng): Icon đại diện cho section
       - Không bắt buộc
       - Chỉ chấp nhận file ảnh
     - **Title** (Tiêu đề): Mặc định "Bạn có thắc mắc?"
       - Có thể thay đổi
       - Không bắt buộc
     - **Subtitle** (Phụ đề): Mặc định "Tìm câu trả lời cho những câu hỏi phổ biến nhất"
       - Có thể thay đổi
       - Không bắt buộc
     - **FAQ Items** (Danh sách câu hỏi): Repeatable
       - Có thể thêm nhiều câu hỏi
       - **Mỗi câu hỏi có**:
         - **Question** (Câu hỏi) - **BẮT BUỘC**
           - Câu hỏi của khách hàng
           - Ví dụ: "Làm thế nào để liên hệ với Auto Tuan Linh?"
         - **Answer** (Câu trả lời) - **BẮT BUỘC**
           - Câu trả lời chi tiết
           - **Rich text editor**: Có thể format text, thêm link, danh sách, heading
           - Ví dụ: "Bạn có thể liên hệ qua Hotline: 1900 123 456 hoặc Email: info@autotuanlinh.com"

10. **Testimonials Section** (Phần đánh giá khách hàng)
    - **Mục đích**: Hiển thị đánh giá, phản hồi từ khách hàng
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "Khách hàng nói gì về chúng tôi"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Hơn 10,000 khách hàng tin tưởng"
        - Không bắt buộc
      - **Testimonials** (Danh sách đánh giá): Repeatable
        - Có thể thêm nhiều đánh giá (thường 3-6 đánh giá)
        - **Mỗi đánh giá có**:
          - **Rating** (Điểm đánh giá) - **BẮT BUỘC**
            - Điểm từ 1-5 sao
            - Mặc định: 5
            - Ví dụ: 5 (5 sao), 4 (4 sao)
          - **Testimonial** (Nội dung đánh giá) - **BẮT BUỘC**
            - Nội dung đánh giá của khách hàng
            - Ví dụ: "Sản phẩm chất lượng tốt, giao hàng nhanh, nhân viên tư vấn nhiệt tình!"
          - **Customer Name** (Tên khách hàng) - **BẮT BUỘC**
            - Tên người đánh giá
            - Ví dụ: "Nguyễn Văn A", "Trần Thị B"
          - **Avatar** (Ảnh đại diện): Ảnh của khách hàng
            - Không bắt buộc nhưng nên có để tăng độ tin cậy
            - Chỉ chấp nhận file ảnh
            - Khuyến nghị: Ảnh vuông (1:1), kích thước 200x200px

11. **Contact Section** (Phần liên hệ)
    - **Mục đích**: Hiển thị thông tin liên hệ trên trang chủ
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "Liên hệ với chúng tôi"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Chúng tôi luôn sẵn sàng hỗ trợ bạn"
        - Không bắt buộc
      - **Contact Info Cards** (Danh sách thẻ thông tin liên hệ): Repeatable
        - Có thể thêm nhiều thẻ
        - **Mỗi thẻ có**:
          - **Icon** (Biểu tượng): Icon đại diện
            - Không bắt buộc
            - Chỉ chấp nhận file ảnh
          - **Title** (Tiêu đề) - **BẮT BUỘC**
            - Ví dụ: "Hotline", "Email", "Địa chỉ"
          - **Details** (Chi tiết): Thông tin chi tiết
            - Ví dụ: "1900 123 456", "info@autotuanlinh.com"
            - Không bắt buộc
          - **CTA Text** (Text nút): Text trên nút
            - Ví dụ: "Gọi ngay", "Gửi email"
            - Không bắt buộc
          - **CTA URL** (Link nút): Link khi click nút
            - Ví dụ: "tel:1900123456", "mailto:info@autotuanlinh.com"
            - Không bắt buộc

12. **Professional Services Section** (Dịch vụ chuyên nghiệp)
    - **Mục đích**: Giới thiệu các dịch vụ chuyên nghiệp của công ty
    - **Các trường**:
      - **Title** (Tiêu đề): Mặc định "Dịch vụ chuyên nghiệp"
        - Có thể thay đổi
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mặc định "Cam kết mang đến trải nghiệm tốt nhất cho khách hàng"
        - Có thể thay đổi
        - Không bắt buộc
      - **Service Cards** (Danh sách thẻ dịch vụ): Repeatable
        - Có thể thêm nhiều dịch vụ (thường 3-4 dịch vụ)
        - **Mỗi thẻ dịch vụ có**:
          - **Icon** (Biểu tượng): Icon đại diện cho dịch vụ
            - Không bắt buộc
            - Chỉ chấp nhận file ảnh
          - **Image** (Hình ảnh): Ảnh minh họa dịch vụ
            - Không bắt buộc
            - Chỉ chấp nhận file ảnh
            - Khuyến nghị: Ảnh chất lượng cao, kích thước 800x600px
          - **Title** (Tiêu đề) - **BẮT BUỘC**
            - Tên dịch vụ
            - Ví dụ: "Dán phim cách nhiệt", "Bọc ghế da", "Nâng cấp âm thanh"
          - **Description** (Mô tả): Mô tả ngắn về dịch vụ
            - Ví dụ: "Dịch vụ dán phim cách nhiệt chuyên nghiệp với công nghệ hiện đại"
            - Không bắt buộc
          - **Features** (Tính năng): Danh sách tính năng - Repeatable
            - Có thể thêm nhiều tính năng
            - **Mỗi tính năng có**:
              - **Text** (Văn bản) - **BẮT BUỘC**
                - Ví dụ: "Bảo hành 5 năm", "Lắp đặt tại nhà", "Miễn phí tư vấn"
          - **Link** (Liên kết): Link đến trang dịch vụ
            - Ví dụ: "/dich-vu/dan-phim-cach-nhiet"
            - Không bắt buộc
          - **Danh mục bài viết dịch vụ**: Chọn danh mục dịch vụ liên quan
            - Không bắt buộc

13. **Featured Products Section** (Sản phẩm nổi bật)
    - **Mục đích**: Hiển thị các sản phẩm nổi bật, bán chạy trên trang chủ
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "Sản phẩm nổi bật"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Khám phá các sản phẩm được yêu thích nhất"
        - Không bắt buộc
      - **Products** (Sản phẩm): Chọn nhiều sản phẩm
        - **Cách chọn**: Click vào field, tìm kiếm sản phẩm theo tên
        - **Có thể chọn nhiều sản phẩm** (thường 4-8 sản phẩm)
        - **Lưu ý**: Chỉ chọn các sản phẩm đã được **Publish**
        - Sản phẩm sẽ hiển thị theo thứ tự bạn chọn

14. **Special Promotions Section** (Khuyến mãi đặc biệt)
    - **Mục đích**: Hiển thị các chương trình khuyến mãi, ưu đãi đặc biệt
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "KHUYẾN MÃI ĐẶC BIỆT"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Nhiều chương trình khuyến mãi đang chờ đón bạn"
        - Không bắt buộc
      - **Promotion Cards** (Danh sách thẻ khuyến mãi): Repeatable
        - Có thể thêm nhiều khuyến mãi (thường 2-4 khuyến mãi)
        - **Mỗi thẻ khuyến mãi có**:
          - **Image** (Hình ảnh): Ảnh banner khuyến mãi
            - Không bắt buộc nhưng nên có
            - Chỉ chấp nhận file ảnh
            - Khuyến nghị: Kích thước 800x400px
          - **Badge** (Nhãn): Chọn một trong: "Hot", "Mới", "FREE"
            - Ví dụ: "HOT" cho khuyến mãi hot
            - Không bắt buộc
          - **Discount** (Giảm giá): Phần trăm hoặc số tiền giảm
            - Ví dụ: "30%", "500.000đ"
            - Không bắt buộc
          - **Is Free** (Miễn phí): Checkbox đánh dấu miễn phí
            - Check nếu là chương trình miễn phí
            - Không bắt buộc
          - **End Date** (Ngày kết thúc): Ngày hết hạn khuyến mãi
            - Format: YYYY-MM-DD
            - Ví dụ: "2025-12-31"
            - Không bắt buộc
          - **Title** (Tiêu đề) - **BẮT BUỘC**
            - Tên chương trình khuyến mãi
            - Ví dụ: "Giảm giá 30% tất cả phụ kiện nội thất"
          - **Description** (Mô tả): Mô tả chi tiết
            - Ví dụ: "Áp dụng cho tất cả sản phẩm trong danh mục"
            - Không bắt buộc
          - **Link** (Liên kết): Link đến trang khuyến mãi
            - Ví dụ: "/khuyen-mai"
            - Không bắt buộc
          - **Button Text** (Text nút): Text trên nút
            - Mặc định: "Xem ngay →"
            - Ví dụ: "Mua ngay"
            - Không bắt buộc

15. **CTA Section** (Call to Action)
    - **Mục đích**: Kêu gọi hành động từ khách hàng (đăng ký, liên hệ, mua hàng)
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề chính
        - Ví dụ: "Sẵn sàng nâng cấp xe của bạn?"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Liên hệ ngay để được tư vấn miễn phí"
        - Không bắt buộc
      - **Primary Button** (Nút chính): Nút hành động chính
        - **Các trường**:
          - **Text** (Text nút) - **BẮT BUỘC**
            - Ví dụ: "Liên hệ ngay", "Đặt hàng ngay"
          - **URL** (Liên kết): Link khi click nút
            - Ví dụ: "/lien-he", "tel:1900123456"
            - Không bắt buộc
          - **Icon** (Biểu tượng): Icon trên nút
            - Chọn: "phone", "arrow-right", "arrow-left", "none"
            - Mặc định: "none"
          - **Style** (Kiểu): Kiểu nút
            - Chọn: "primary" (chính), "secondary" (phụ)
            - Mặc định: "primary"
      - **Secondary Button** (Nút phụ): Nút hành động phụ
        - Cấu trúc giống Primary Button
        - Không bắt buộc

16. **Latest News Section** (Tin tức mới nhất)
    - **Mục đích**: Hiển thị các bài viết blog mới nhất trên trang chủ
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "Tin tức mới nhất"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Cập nhật tin tức và kiến thức mới nhất về phụ kiện ô tô"
        - Không bắt buộc
      - **View All Button** (Nút xem tất cả): Nút link đến trang blog
        - **Các trường**:
          - **Text** (Text nút) - **BẮT BUỘC**
            - Ví dụ: "Xem tất cả →"
          - **URL** (Liên kết): Link đến trang blog
            - Ví dụ: "/blog", "/tin-tuc"
            - Không bắt buộc
          - **Icon**: Chọn icon (phone, arrow-right, arrow-left, none)
          - **Style**: Chọn kiểu (primary, secondary)
      - **Blogs** (Blog): Chọn nhiều blog
        - **Cách chọn**: Click vào field, tìm kiếm blog theo tên
        - **Có thể chọn nhiều blog** (thường 3-6 bài)
        - **Lưu ý**: Chỉ chọn các blog đã được **Publish**
        - Blog sẽ hiển thị theo thứ tự bạn chọn

17. **Product Categories Section** (Danh mục sản phẩm)
    - **Mục đích**: Hiển thị các danh mục sản phẩm chính trên trang chủ
    - **Các trường**:
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "Danh mục sản phẩm"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Khám phá đầy đủ các sản phẩm phụ kiện ô tô"
        - Không bắt buộc
      - **Danh mục sản phẩm**: Chọn nhiều danh mục cấp 1
        - **Cách chọn**: Click vào field, tìm kiếm danh mục theo tên
        - **Có thể chọn nhiều danh mục** (thường 4-6 danh mục)
        - **Lưu ý**: Chỉ chọn các danh mục đã được **Publish**
        - Danh mục sẽ hiển thị theo thứ tự bạn chọn

18. **Newsletter Section** (Phần đăng ký nhận tin)
    - **Mục đích**: Form đăng ký nhận tin tức, khuyến mãi qua email
    - **Các trường**:
      - **Icon** (Biểu tượng): Icon đại diện
        - Không bắt buộc
        - Chỉ chấp nhận file ảnh
      - **Title** (Tiêu đề): Tiêu đề section
        - Ví dụ: "Đăng ký nhận tin"
        - Không bắt buộc
      - **Subtitle** (Phụ đề): Mô tả ngắn
        - Ví dụ: "Nhận thông tin khuyến mãi và tin tức mới nhất"
        - Không bắt buộc
      - **Button Text** (Text nút): Text trên nút đăng ký
        - Ví dụ: "Đăng ký ngay", "Gửi"
        - Không bắt buộc
      - **Privacy Text** (Văn bản bảo mật): Text về chính sách bảo mật
        - Ví dụ: "Chúng tôi cam kết bảo mật thông tin của bạn"
        - Không bắt buộc

#### Cách chỉnh sửa:

1. Click vào **Home** trong Single Types
2. Bạn sẽ thấy form với tất cả các sections
3. Để thêm/sửa một section:
   - Tìm section bạn muốn chỉnh sửa
   - Click vào section đó
   - Điền thông tin hoặc thêm/xóa items
4. Click **Save** để lưu thay đổi

**Lưu ý**: 
- Home không có chế độ Draft/Publish, thay đổi sẽ áp dụng ngay
- Slug sẽ tự động tạo từ Title

---

### 2. Footer

**Vị trí**: Content Manager → Single Types → Footer

Footer chứa thông tin chân trang website:

- **Company Name** (Tên công ty)
  - **Mục đích**: Tên công ty hiển thị ở footer
  - **Mặc định**: "Auto Tuan Linh"
  - **Có thể thay đổi** nếu cần
  - Không bắt buộc

- **Company Description** (Mô tả công ty)
  - **Mục đích**: Mô tả ngắn về công ty ở footer
  - **Ví dụ**: "Chuyên cung cấp phụ kiện ô tô chính hãng, chất lượng cao"
  - Không bắt buộc

- **Social Medias** (Mạng xã hội) - Repeatable
  - **Mục đích**: Danh sách liên kết mạng xã hội
  - **Có thể thêm nhiều** (Facebook, Instagram, YouTube, Zalo, v.v.)
  - **Mỗi mạng xã hội có**:
    - **Icon** (Biểu tượng) - **BẮT BUỘC**
      - Icon/logo của mạng xã hội
      - Chỉ chấp nhận file ảnh
      - Khuyến nghị: Icon vuông, kích thước 64x64px
    - **URL** (Liên kết) - **BẮT BUỘC**
      - Link đến trang mạng xã hội
      - Ví dụ: "https://facebook.com/autotuanlinh", "https://instagram.com/autotuanlinh"

- **Columns** (Các cột liên kết) - Repeatable
  - **Mục đích**: Các cột liên kết trong footer (thường 3-4 cột)
  - **Mỗi cột có**:
    - **Heading** (Tiêu đề cột) - **BẮT BUỘC**
      - Ví dụ: "Sản phẩm", "Dịch vụ", "Hỗ trợ", "Về chúng tôi"
    - **Links** (Danh sách liên kết) - Repeatable
      - Có thể thêm nhiều link trong cột
      - **Mỗi link có**:
        - **Text** (Text link) - **BẮT BUỘC**
          - Ví dụ: "Trang chủ", "Sản phẩm", "Liên hệ"
        - **URL** (Liên kết)
          - Ví dụ: "/", "/san-pham", "/lien-he"
          - Không bắt buộc

- **Copyright** (Bản quyền)
  - **Mục đích**: Văn bản bản quyền hiển thị ở cuối footer
  - **Mặc định**: "© 2025 Auto Tuan Linh. Tất cả quyền được bảo lưu."
  - **Có thể thay đổi** nếu cần
  - Không bắt buộc

- **Privacy Policy URL** (Link chính sách bảo mật)
  - **Mục đích**: Link đến trang chính sách bảo mật
  - **Ví dụ**: "/chinh-sach-bao-mat", "https://autotuanlinh.com/chinh-sach-bao-mat"
  - Không bắt buộc

- **Terms of Use URL** (Link điều khoản sử dụng)
  - **Mục đích**: Link đến trang điều khoản sử dụng
  - **Ví dụ**: "/dieu-khoan-su-dung", "https://autotuanlinh.com/dieu-khoan"
  - Không bắt buộc

---

### 3. Footer Contact

**Vị trí**: Content Manager → Single Types → Footer Contact

Chứa thông tin liên hệ hiển thị ở footer:

- **Contact Info Items** (Danh sách thông tin liên hệ) - Repeatable
  - **Mục đích**: Hiển thị thông tin liên hệ ở footer (Hotline, Email, Địa chỉ)
  - **Có thể thêm nhiều items** (thường 3 items: Hotline, Email, Địa chỉ)
  - **Mỗi item có**:
    - **Icon** (Biểu tượng)
      - Icon đại diện cho loại thông tin
      - Không bắt buộc
      - Chỉ chấp nhận file ảnh
      - Ví dụ: Icon điện thoại cho Hotline, Icon email cho Email
    - **Title** (Tiêu đề) - **BẮT BUỘC**
      - Tên loại thông tin
      - Ví dụ: "Hotline", "Email", "Địa chỉ"
    - **Value** (Giá trị) - **BẮT BUỘC**
      - Nội dung thông tin
      - Ví dụ: "1900 123 456", "info@autotuanlinh.com", "123 Đường ABC, Quận XYZ, TP.HCM"
    - **URL** (Liên kết)
      - Link khi click vào thông tin
      - Ví dụ: "tel:1900123456" (cho Hotline), "mailto:info@autotuanlinh.com" (cho Email)
      - Không bắt buộc

---

### 4. Về chúng tôi

**Vị trí**: Content Manager → Single Types → Về chúng tôi

Trang giới thiệu về công ty với các sections:

1. **SEO** (Bắt buộc)
2. **Hero Section**: Section đầu trang
3. **Introduction Section**: Phần giới thiệu
4. **Achievements Section**: Phần thành tựu (thống kê)
5. **Core Values Section**: Phần giá trị cốt lõi
6. **History Timeline Section**: Phần lịch sử (timeline)
7. **Commitments Section**: Phần cam kết
8. **Partners Section**: Phần đối tác
9. **Certifications Section**: Phần chứng nhận
10. **Showroom Section**: Phần showroom
11. **Workshop Section**: Phần xưởng
12. **Store Locations Section**: Phần địa điểm cửa hàng
13. **Process Section**: Phần quy trình
14. **Before After Section**: Phần trước/sau
15. **Team Section**: Phần đội ngũ
16. **Testimonials Section**: Phần đánh giá
17. **CTA Section**: Phần call to action

---

### 5. Liên hệ

**Vị trí**: Content Manager → Single Types → Liên hệ

Trang liên hệ với các sections:

1. **SEO** (Bắt buộc)
2. **Contact CTA Section**: Section CTA liên hệ
   - Badge (mặc định: "LIÊN HỆ NGAY")
   - Title (mặc định: "Chúng tôi sẵn sàng")
   - Subtitle (mặc định: "hỗ trợ bạn")
   - Description
   - Nút chính, Nút phụ

3. **Contact Info Cards Section**: Section thẻ thông tin liên hệ
   - Danh sách thẻ (Hotline, Email, Địa chỉ)
   - Mỗi thẻ có: Icon, Title, Value, Description, Badge, URL

4. **Professional Services Section**: Dịch vụ chuyên nghiệp
   - Tương tự như trong Home

5. **Contact Form Section**: Section form liên hệ
   - Badge (mặc định: "GỬI TIN NHẮN")
   - Title (mặc định: "Liên hệ với chúng tôi")
   - Subtitle
   - Map Embed URL, Map Title, Map Link
   - Working Hours: Giờ làm việc
     - Title (mặc định: "Giờ làm việc")
     - Subtitle (mặc định: "Chúng tôi luôn sẵn sàng")
     - Time Slots: Các khung giờ (Label, Days, Hours, Icon)
   - Social Links: Liên kết mạng xã hội

6. **FAQ Section**: Câu hỏi thường gặp
   - Title (mặc định: "Bạn có thắc mắc?")
   - Subtitle (mặc định: "Tìm câu trả lời cho những câu hỏi phổ biến nhất")
   - Danh sách FAQ items

---

## Hướng dẫn quản lý Collection Types

Collection Types cho phép bạn tạo nhiều bản ghi. Mỗi bản ghi có thể có trạng thái Draft (Bản nháp) hoặc Published (Đã xuất bản).

### 1. Sản phẩm

**Vị trí**: Content Manager → Collection Types → Sản phẩm

#### Các trường thông tin:

1. **SEO** (Bắt buộc) ⭐
   - **Mục đích**: Thông tin SEO để tối ưu hóa tìm kiếm trên Google
   - **Bắt buộc phải điền** để sản phẩm hiển thị tốt trên Google
   - Xem chi tiết ở phần [Hướng dẫn về SEO](#hướng-dẫn-về-seo)
   - **Các trường quan trọng**:
     - Meta Title: Tiêu đề hiển thị trên Google (tối đa 60 ký tự)
     - Meta Description: Mô tả hiển thị trên Google (tối đa 160 ký tự)
     - Meta Keywords: Từ khóa liên quan

2. **Title** (Tên sản phẩm) - **BẮT BUỘC** ⭐
   - **Mục đích**: Tên chính của sản phẩm
   - **Lưu ý**: 
     - Tên rõ ràng, dễ hiểu
     - Nên chứa từ khóa chính
   - **Ví dụ**: 
     - "Amply 4 kênh 1000W"
     - "Ghế da Nappa cao cấp"
     - "Camera hành trình 4K"

3. **Slug** (URL) - Tự động
   - **Mục đích**: Tạo URL thân thiện cho sản phẩm
   - **Tự động tạo** từ Title khi bạn nhập Title
   - **Có thể chỉnh sửa thủ công** nếu cần
   - **Ví dụ**: 
     - Title: "Amply 4 kênh 1000W" → Slug: "amply-4-kenh-1000w"
     - URL sản phẩm sẽ là: `/san-pham/amply-4-kenh-1000w`
   - **Lưu ý**: Slug phải là duy nhất, không trùng với sản phẩm khác

4. **Mô tả ngắn**
   - **Mục đích**: Mô tả ngắn gọn về sản phẩm, hiển thị ở danh sách sản phẩm
   - **Độ dài**: Khoảng 100-200 ký tự
   - **Nội dung nên có**:
     - Đặc điểm nổi bật
     - Lợi ích chính
     - Thông tin quan trọng
   - **Ví dụ**: 
     - "Amply 4 kênh 1000W chính hãng, chất lượng cao, bảo hành đầy đủ. Sản phẩm được nhập khẩu trực tiếp từ nhà sản xuất."

5. **Ảnh sản phẩm**
   - **Mục đích**: Hình ảnh minh họa sản phẩm
   - **Có thể upload nhiều ảnh** (khuyến nghị 3-5 ảnh)
   - **Chỉ chấp nhận file ảnh**: JPG, PNG, WebP, GIF
   - **Yêu cầu**:
     - Ảnh đầu tiên sẽ là ảnh đại diện (hiển thị ở danh sách)
     - Kích thước khuyến nghị: 800x800px (ảnh vuông) hoặc 1200x800px
     - Dung lượng: Không quá 2MB mỗi ảnh
     - Chất lượng cao, rõ nét
   - **Cách upload**: 
     - Click "Add an entry" hoặc kéo thả ảnh
     - Có thể upload từ Media Library (ảnh đã có sẵn)

6. **Giá gốc**
   - **Mục đích**: Giá ban đầu của sản phẩm (trước khi giảm giá)
   - **Định dạng**: Số (không có dấu phẩy, dấu chấm)
   - **Ví dụ**: 
     - 5500000 (5.500.000đ)
     - 12000000 (12.000.000đ)
   - **Lưu ý**: 
     - Nhập số nguyên, không có ký tự
     - Nếu không có giá gốc, có thể để trống hoặc nhập bằng giá bán

7. **Giá bán**
   - **Mục đích**: Giá bán hiện tại của sản phẩm
   - **Định dạng**: Số (không có dấu phẩy, dấu chấm)
   - **Ví dụ**: 
     - 4500000 (4.500.000đ)
     - 10000000 (10.000.000đ)
   - **Lưu ý**: 
     - Giá bán thường nhỏ hơn hoặc bằng giá gốc
     - Nếu có giảm giá, giá bán = giá gốc - (giá gốc × % giảm giá)

8. **Mô tả chi tiết**
   - **Mục đích**: Mô tả đầy đủ, chi tiết về sản phẩm
   - **Editor**: Rich text editor (có thể format text)
   - **Có thể**:
     - Format text: **Bold**, *Italic*, <u>Underline</u>
     - Thêm heading (H1, H2, H3)
     - Tạo danh sách (bullet, numbered)
     - Thêm link
     - Chèn ảnh vào nội dung
   - **Nội dung nên có**:
     - Mô tả chi tiết sản phẩm
     - Đặc điểm, tính năng
     - Hướng dẫn sử dụng (nếu cần)
     - Thông tin bảo hành
   - **Ví dụ**: 
     ```
     <p>Amply 4 kênh 1000W là sản phẩm cao cấp...</p>
     <h3>Đặc điểm nổi bật:</h3>
     <ul>
       <li>Công suất 1000W</li>
       <li>4 kênh độc lập</li>
     </ul>
     ```

9. **Thông số** (Repeatable) - Có thể thêm nhiều
   - **Mục đích**: Hiển thị bảng thông số kỹ thuật của sản phẩm
   - **Cách thêm**: Click "Add an entry" để thêm thông số mới
   - **Mỗi thông số có 2 trường**:
     - **Label** (Nhãn) - **BẮT BUỘC**: Tên thông số
       - Ví dụ: "Thương hiệu", "Công suất", "Bảo hành", "Kích thước"
     - **Value** (Giá trị) - **BẮT BUỘC**: Giá trị của thông số
       - Ví dụ: "AmpPro", "1000W", "2 năm", "30x20x10cm"
   - **Ví dụ thông số đầy đủ**:
     - Label: "Thương hiệu", Value: "AmpPro"
     - Label: "Công suất", Value: "1000W"
     - Label: "Số kênh", Value: "4 kênh"
     - Label: "Bảo hành", Value: "2 năm"
     - Label: "Xuất xứ", Value: "Trung Quốc"

10. **Badges** (Nhãn)
    - **Mục đích**: Đánh dấu sản phẩm đặc biệt (bán chạy, hot, mới)
    - **Cách chọn**: Dropdown menu
    - **Các lựa chọn**:
      - "Bán chạy": Sản phẩm bán chạy nhất
      - "Hot": Sản phẩm hot, đang được quan tâm
      - "Mới": Sản phẩm mới ra mắt
    - **Lưu ý**: 
      - Chỉ chọn 1 nhãn
      - Có thể để trống nếu không cần nhãn
      - Nhãn sẽ hiển thị trên card sản phẩm

11. **Giảm giá** (%)
    - **Mục đích**: Phần trăm giảm giá (để tính toán và hiển thị)
    - **Định dạng**: Số nguyên từ 0-100
    - **Ví dụ**: 
      - 10 (giảm 10%)
      - 25 (giảm 25%)
      - 50 (giảm 50%)
    - **Công thức**: 
      - Giảm giá = ((Giá gốc - Giá bán) / Giá gốc) × 100
      - Ví dụ: Giá gốc 5.500.000đ, Giá bán 4.500.000đ
      - → Giảm giá = ((5.500.000 - 4.500.000) / 5.500.000) × 100 = 18%
    - **Lưu ý**: 
      - Nhập số nguyên, không có dấu %
      - Nếu không giảm giá, để trống hoặc nhập 0

12. **Rating** (Đánh giá trung bình)
    - **Mục đích**: Điểm đánh giá trung bình từ khách hàng
    - **Định dạng**: Số thập phân từ 0.0 đến 5.0
    - **Ví dụ**: 
      - 4.5 (4.5 sao)
      - 5.0 (5 sao - hoàn hảo)
      - 3.8 (3.8 sao)
    - **Lưu ý**: 
      - Điểm này nên được tính từ các đánh giá trong field "Reviews"
      - Có thể cập nhật thủ công hoặc tự động (nếu có hệ thống tính toán)

13. **Review Count** (Số lượng đánh giá)
    - **Mục đích**: Tổng số đánh giá của khách hàng
    - **Định dạng**: Số nguyên (≥ 0)
    - **Ví dụ**: 
      - 10 (10 đánh giá)
      - 25 (25 đánh giá)
      - 0 (chưa có đánh giá)
    - **Lưu ý**: 
      - Số này nên bằng số lượng reviews trong field "Reviews"
      - Có thể cập nhật thủ công

14. **Reviews** (Đánh giá chi tiết) - Repeatable
    - **Mục đích**: Lưu trữ các đánh giá chi tiết từ khách hàng
    - **Cách thêm**: Click "Add an entry" để thêm đánh giá mới
    - **Mỗi đánh giá có các trường**:
      - **Customer Name** (Tên khách hàng) - **BẮT BUỘC**
        - Tên người đánh giá
        - Ví dụ: "Nguyễn Văn A", "Trần Thị B"
      - **Email** (Email) - **BẮT BUỘC**
        - Email của khách hàng
        - Ví dụ: "nguyenvana@gmail.com"
        - **Lưu ý**: Phải là email hợp lệ
      - **Rating** (Điểm đánh giá) - **BẮT BUỘC**
        - Điểm từ 1-5 sao
        - Ví dụ: 5 (5 sao), 4 (4 sao), 3 (3 sao)
      - **Content** (Nội dung đánh giá) - **BẮT BUỘC**
        - Nội dung đánh giá của khách hàng
        - Ví dụ: "Sản phẩm chất lượng tốt, giao hàng nhanh, đóng gói cẩn thận. Rất hài lòng!"
      - **Is Approved** (Đã duyệt) - Checkbox
        - **Mục đích**: Kiểm soát đánh giá nào được hiển thị công khai
        - **Check**: Đánh giá được duyệt, sẽ hiển thị trên website
        - **Uncheck**: Đánh giá chưa duyệt, không hiển thị
        - **Mặc định**: Uncheck (chưa duyệt)
        - **Quy trình**: 
          1. Khách hàng gửi đánh giá → Is Approved = false
          2. Admin xem và duyệt → Check Is Approved = true
          3. Đánh giá hiển thị trên website

#### Cách tạo sản phẩm mới:

1. Click **"Create new entry"** trong Collection Types → Sản phẩm
2. Điền đầy đủ thông tin (các trường bắt buộc có dấu *)
3. Click **"Save"** để lưu bản nháp
4. Click **"Publish"** để xuất bản (hiển thị trên website)

#### Cách chỉnh sửa sản phẩm:

1. Tìm sản phẩm trong danh sách
2. Click vào sản phẩm
3. Chỉnh sửa thông tin
4. Click **"Save"** hoặc **"Publish"**

---

### 2. Blog

**Vị trí**: Content Manager → Collection Types → Blog

#### Các trường thông tin:

1. **SEO** (Bắt buộc) ⭐
   - **Mục đích**: Thông tin SEO để tối ưu hóa tìm kiếm trên Google
   - **Bắt buộc phải điền** để bài viết hiển thị tốt trên Google
   - Xem chi tiết ở phần [Hướng dẫn về SEO](#hướng-dẫn-về-seo)

2. **Hashtag**
   - **Mục đích**: Hashtag để phân loại và tìm kiếm bài viết
   - **Định dạng**: Text, có thể có nhiều hashtag cách nhau bằng dấu cách
   - **Ví dụ**: 
     - "#phukienoto #review"
     - "#gheda #huongdan #phukien"
   - **Lưu ý**: 
     - Bắt đầu bằng dấu #
     - Không có khoảng trắng trong hashtag
     - Có thể có nhiều hashtag

3. **Title** (Tiêu đề bài viết) - **BẮT BUỘC** ⭐
   - **Mục đích**: Tiêu đề chính của bài viết
   - **Yêu cầu**: 
     - Rõ ràng, hấp dẫn
     - Nên chứa từ khóa chính
     - Độ dài: 50-70 ký tự
   - **Ví dụ**: 
     - "Hướng dẫn chọn ghế da ô tô phù hợp"
     - "Review ghế da cao cấp cho ô tô"
     - "Bảo hành phim cách nhiệt - Những điều cần biết"

4. **Slug** (URL) - Tự động
   - **Mục đích**: Tạo URL thân thiện cho bài viết
   - **Tự động tạo** từ Title
   - **Có thể chỉnh sửa thủ công** nếu cần
   - **Ví dụ**: 
     - Title: "Hướng dẫn chọn ghế da ô tô phù hợp" → Slug: "huong-dan-chon-ghe-da-o-to-phu-hop"
   - **Lưu ý**: Slug phải là duy nhất

5. **Avatar** (Ảnh đại diện)
   - **Mục đích**: Ảnh đại diện cho bài viết, hiển thị ở danh sách blog
   - **Chỉ 1 ảnh** (không phải nhiều ảnh)
   - **Yêu cầu**:
     - Kích thước khuyến nghị: 1200x800px hoặc 16:9
     - Dung lượng: Không quá 2MB
     - Chất lượng cao, rõ nét
   - **Cách upload**: Click vào field, chọn ảnh từ Media Library hoặc upload mới

6. **Mô tả ngắn**
   - **Mục đích**: Mô tả ngắn gọn về bài viết, hiển thị ở danh sách blog
   - **Độ dài**: Khoảng 150-200 ký tự
   - **Nội dung nên có**:
     - Tóm tắt nội dung chính
     - Lợi ích cho người đọc
     - Call-to-action (nếu có)
   - **Ví dụ**: 
     - "Bảo hành phim cách nhiệt - Những điều cần biết. So sánh các sản phẩm trên thị trường để giúp bạn lựa chọn tốt nhất."

7. **Nội dung**
   - **Mục đích**: Nội dung chính của bài viết
   - **Editor**: Rich text editor (có thể format text)
   - **Có thể**:
     - Format text: **Bold**, *Italic*, <u>Underline</u>
     - Thêm heading (H1, H2, H3, H4, H5, H6)
     - Tạo danh sách (bullet, numbered)
     - Thêm link (internal, external)
     - Chèn ảnh vào nội dung
     - Chèn video (embed)
     - Tạo bảng
     - Quote (trích dẫn)
   - **Cấu trúc bài viết nên có**:
     - Giới thiệu ngắn
     - Nội dung chính (có thể chia thành nhiều phần với heading)
     - Kết luận
   - **Lưu ý**: 
     - Nội dung nên dài ít nhất 300 từ để SEO tốt
     - Sử dụng heading để phân cấp nội dung
     - Chèn ảnh minh họa để bài viết sinh động hơn

8. **Is Noi Bat** (Nổi bật)
   - **Mục đích**: Đánh dấu bài viết nổi bật để hiển thị ở vị trí đặc biệt
   - **Cách sử dụng**: Checkbox
   - **Check**: Bài viết được đánh dấu nổi bật
   - **Uncheck**: Bài viết bình thường
   - **Mặc định**: Uncheck
   - **Lưu ý**: 
     - Nên có 3-5 bài viết nổi bật
     - Bài viết nổi bật sẽ hiển thị ở section "Tin tức mới nhất" hoặc các vị trí đặc biệt khác

#### Cách tạo/chỉnh sửa blog:

Tương tự như Sản phẩm, nhưng có thêm:
- **Draft**: Lưu bản nháp
- **Publish**: Xuất bản bài viết

---

### 3. Danh mục sản phẩm

**Vị trí**: Content Manager → Collection Types → Danh mục sản phẩm

Danh mục sản phẩm có cấu trúc 3 cấp:

- **Cấp 1**: Danh mục chính (ví dụ: "Phụ kiện nội thất")
- **Cấp 2**: Danh mục con (ví dụ: "Ghế da")
- **Cấp 3**: Danh mục con của cấp 2 (ví dụ: "Ghế da Nappa")

#### Các trường của Danh mục cấp 1:

1. **SEO** (Bắt buộc)

2. **Title** (Bắt buộc)
   - Tên danh mục
   - Ví dụ: "Phụ kiện nội thất"

3. **Slug** (Tự động)

4. **Mô tả**
   - Mô tả về danh mục

5. **Ảnh danh mục**
   - Ảnh đại diện cho danh mục

6. **Danh mục cấp 2** (Repeatable)
   - Danh sách các danh mục cấp 2
   - Mỗi danh mục cấp 2 có:
     - **SEO** (Bắt buộc)
     - **Title** (Bắt buộc)
     - **Slug** (Bắt buộc)
     - **Danh mục cấp 3** (Repeatable) - Tùy chọn
       - Mỗi danh mục cấp 3 có:
         - **SEO** (Bắt buộc)
         - **Title** (Bắt buộc)
         - **Slug** (Bắt buộc)
         - **Sản phẩm**: Chọn các sản phẩm từ danh sách

#### Cách tạo danh mục:

1. Tạo Danh mục cấp 1
2. Trong danh mục cấp 1, thêm **Danh mục cấp 2**
3. Trong danh mục cấp 2, có thể thêm **Danh mục cấp 3**
4. Trong danh mục cấp 3, chọn các **Sản phẩm** thuộc danh mục đó

**Lưu ý**: Sản phẩm chỉ được gắn vào danh mục cấp 3 (cấp cuối cùng).

---

### 4. Danh mục bài viết sản phẩm

**Vị trí**: Content Manager → Collection Types → Danh mục bài viết sản phẩm

Danh mục bài viết có cấu trúc 2 cấp:

- **Cấp 1**: Danh mục chính (ví dụ: "Phụ kiện nội thất")
- **Cấp 2**: Danh mục con (ví dụ: "Hướng dẫn chọn ghế da")

#### Các trường của Danh mục cấp 1:

1. **SEO** (Bắt buộc) ⭐
   - **Mục đích**: Thông tin SEO cho danh mục bài viết
   - Xem chi tiết ở phần [Hướng dẫn về SEO](#hướng-dẫn-về-seo)

2. **Title** (Tên danh mục) - **BẮT BUỘC** ⭐
   - **Mục đích**: Tên chính của danh mục bài viết cấp 1
   - **Ví dụ**: 
     - "Phụ kiện nội thất"
     - "Phụ kiện ngoại thất"
     - "Đồ chơi xe hơi"
   - **Lưu ý**: Tên rõ ràng, dễ hiểu

3. **Slug** (URL) - Tự động
   - **Mục đích**: URL của danh mục
   - **Tự động tạo** từ Title
   - **Ví dụ**: "phu-kien-noi-that", "phu-kien-ngoai-that"
   - **Có thể chỉnh sửa thủ công** nếu cần

4. **Mô tả**
   - **Mục đích**: Mô tả về danh mục bài viết
   - **Ví dụ**: "Danh mục các bài viết về phụ kiện nội thất cho ô tô"
   - Không bắt buộc

5. **Ảnh danh mục**
   - **Mục đích**: Ảnh đại diện cho danh mục
   - **Chỉ 1 ảnh**
   - **Kích thước khuyến nghị**: 800x600px
   - Không bắt buộc

6. **Danh mục cấp 2** (Repeatable) - Có thể thêm nhiều
   - **Mục đích**: Danh sách các danh mục con (cấp 2)
   - **Cách thêm**: Click "Add an entry" để thêm danh mục cấp 2
   - **Mỗi danh mục cấp 2 có**:
     - **SEO** (Bắt buộc) ⭐
       - Thông tin SEO riêng cho danh mục cấp 2
     - **Title** (Tên) - **BẮT BUỘC** ⭐
       - Ví dụ: "Hướng dẫn chọn ghế da", "Review ghế da cao cấp"
     - **Slug** (URL) - **BẮT BUỘC** ⭐
       - **Phải nhập thủ công** (không tự động)
       - Ví dụ: "huong-dan-chon-ghe-da", "review-ghe-da-cao-cap"
       - **Lưu ý**: Slug phải là duy nhất
     - **Bài viết** (Relation): Chọn các blog
       - **Cách chọn**: Click vào field, tìm kiếm blog theo tên
       - **Có thể chọn nhiều blog**
       - **Lưu ý**: 
         - Chỉ chọn blog đã được **Publish**
         - Blog chỉ được gắn vào danh mục cấp 2 (không có cấp 3)
         - Một blog có thể thuộc nhiều danh mục cấp 2 khác nhau

#### Cách tạo danh mục bài viết:

**Bước 1: Tạo Danh mục cấp 1**
1. Vào Collection Types → Danh mục bài viết sản phẩm
2. Click "Create new entry"
3. Điền đầy đủ thông tin (SEO, Title, v.v.)
4. Click "Save" và "Publish"

**Bước 2: Thêm Danh mục cấp 2**
1. Mở danh mục cấp 1
2. Tìm section "Danh mục cấp 2"
3. Click "Add an entry"
4. Điền: SEO, Title, Slug (nhập thủ công)
5. Click "Save"

**Bước 3: Gắn Blog vào danh mục cấp 2**
1. Trong danh mục cấp 2, tìm field "Bài viết"
2. Click vào field
3. Tìm kiếm blog theo tên
4. Chọn các blog cần gắn
5. Click "Save"

**Lưu ý quan trọng**: 
- ⚠️ Blog **CHỈ** được gắn vào danh mục cấp 2 (không có cấp 3)
- ⚠️ Không thể gắn blog vào danh mục cấp 1
- ⚠️ Slug của danh mục cấp 2 phải nhập thủ công

---

### 5. Danh mục bài viết dịch vụ

**Vị trí**: Content Manager → Collection Types → Danh mục bài viết dịch vụ

Cấu trúc tương tự như **Danh mục bài viết sản phẩm** (2 cấp).

---

### 6. Đơn hàng

**Vị trí**: Content Manager → Collection Types → Đơn hàng

Đơn hàng được tạo tự động từ website, nhưng bạn có thể xem và quản lý tại đây.

#### Các trường thông tin:

1. **Mã đơn hàng** (Tự động)
   - **Mục đích**: Mã định danh duy nhất cho mỗi đơn hàng
   - **Tự động tạo** khi đơn hàng được tạo (không cần nhập thủ công)
   - **Format**: Thường là "DH" + ngày + số thứ tự
   - **Ví dụ**: "DH20250108001", "DH20250108002"
   - **Lưu ý**: Mã đơn hàng là duy nhất, không thể trùng

2. **Thông tin khách hàng**
   - **Mục đích**: Lưu trữ thông tin người đặt hàng
   - **Các trường** (tất cả đều **BẮT BUỘC** trừ Ghi chú):
     - **Họ và tên** - **BẮT BUỘC**
       - Tên đầy đủ của khách hàng
       - Ví dụ: "Nguyễn Văn A"
     - **Số điện thoại** - **BẮT BUỘC**
       - Số điện thoại liên hệ
       - Format: 10-11 số
       - Ví dụ: "0901234567", "0912345678"
     - **Email** - **BẮT BUỘC**
       - Email của khách hàng
       - Phải là email hợp lệ
       - Ví dụ: "nguyenvana@gmail.com"
     - **Địa chỉ** - **BẮT BUỘC**
       - Số nhà, tên đường
       - Ví dụ: "123 Đường ABC"
     - **Tỉnh/Thành phố** - **BẮT BUỘC**
       - Ví dụ: "TP. Hồ Chí Minh", "Hà Nội"
     - **Quận/Huyện** - **BẮT BUỘC**
       - Ví dụ: "Quận 1", "Quận 2"
     - **Phường/Xã** - **BẮT BUỘC**
       - Ví dụ: "Phường Bến Nghé", "Phường Đa Kao"
     - **Ghi chú** (Không bắt buộc)
       - Ghi chú từ khách hàng về đơn hàng
       - Ví dụ: "Giao hàng vào buổi sáng", "Gọi trước khi giao"

3. **Sản phẩm** (Repeatable) - **BẮT BUỘC**, tối thiểu 1 sản phẩm
   - **Mục đích**: Danh sách sản phẩm trong đơn hàng
   - **Cách thêm**: Click "Add an entry" để thêm sản phẩm mới
   - **Mỗi sản phẩm có**:
     - **Sản phẩm** (Relation) - **BẮT BUỘC**
       - Chọn sản phẩm từ danh sách sản phẩm
       - **Cách chọn**: Click vào field, tìm kiếm theo tên sản phẩm
       - **Lưu ý**: Chỉ chọn sản phẩm đã được Publish
     - **Số lượng** - **BẮT BUỘC**
       - Số lượng sản phẩm trong đơn
       - Tối thiểu: 1
       - Ví dụ: 1, 2, 5
     - **Giá bán** - **BẮT BUỘC**
       - Giá bán tại thời điểm đặt hàng (có thể khác với giá hiện tại)
       - Định dạng: Số (không có dấu phẩy, dấu chấm)
       - Ví dụ: 4500000 (4.500.000đ)
     - **Thành tiền** - **BẮT BUỘC**
       - Thành tiền = Số lượng × Giá bán
       - Định dạng: Số (không có dấu phẩy, dấu chấm)
       - Ví dụ: Số lượng 2, Giá bán 4.500.000đ → Thành tiền: 9000000

4. **Tạm tính**
   - **Mục đích**: Tổng tiền tạm tính (tổng thành tiền của tất cả sản phẩm)
   - **BẮT BUỘC**
   - **Công thức**: Tạm tính = Tổng (Thành tiền của tất cả sản phẩm)
   - **Ví dụ**: 
     - Sản phẩm 1: Thành tiền 9.000.000đ
     - Sản phẩm 2: Thành tiền 3.500.000đ
     - → Tạm tính: 12500000 (12.500.000đ)

5. **Phí vận chuyển**
   - **Mục đích**: Phí ship/vận chuyển
   - **BẮT BUỘC**
   - **Mặc định**: 0
   - **Định dạng**: Số (không có dấu phẩy, dấu chấm)
   - **Ví dụ**: 
     - 0 (miễn phí ship)
     - 50000 (50.000đ)
     - 100000 (100.000đ)

6. **Tổng cộng**
   - **Mục đích**: Tổng tiền cuối cùng khách hàng phải thanh toán
   - **BẮT BUỘC**
   - **Công thức**: Tổng cộng = Tạm tính + Phí vận chuyển
   - **Ví dụ**: 
     - Tạm tính: 12.500.000đ
     - Phí vận chuyển: 50.000đ
     - → Tổng cộng: 12550000 (12.550.000đ)

7. **Phương thức thanh toán**
   - **Mục đích**: Thông tin về cách khách hàng thanh toán
   - **BẮT BUỘC**
   - **Các trường**:
     - **Loại** - **BẮT BUỘC**: Chọn một trong các loại
       - "cod": Thanh toán khi nhận hàng (COD)
       - "bank_transfer": Chuyển khoản ngân hàng
       - "momo": Ví điện tử Momo
       - "vnpay": Ví điện tử VNPay
     - **Tên** - **BẮT BUỘC**: Tên phương thức thanh toán
       - Ví dụ: "Thanh toán khi nhận hàng", "Chuyển khoản ngân hàng"
     - **Mô tả** (Không bắt buộc): Mô tả chi tiết
       - Ví dụ: "Thanh toán bằng tiền mặt khi nhận hàng"

8. **Trạng thái**
   - **Mục đích**: Theo dõi trạng thái xử lý đơn hàng
   - **BẮT BUỘC**
   - **Mặc định**: "cho_xac_nhan" (Chờ xác nhận)
   - **Các trạng thái**:
     - **cho_xac_nhan**: Chờ xác nhận
       - Đơn hàng mới được tạo, chưa xử lý
     - **da_xac_nhan**: Đã xác nhận
       - Đơn hàng đã được xác nhận, đang chuẩn bị
     - **dang_giao_hang**: Đang giao hàng
       - Đơn hàng đang được vận chuyển
     - **da_giao_hang**: Đã giao hàng
       - Đơn hàng đã giao thành công
     - **da_huy**: Đã hủy
       - Đơn hàng đã bị hủy
   - **Quy trình**: 
     1. Khách đặt hàng → cho_xac_nhan
     2. Admin xác nhận → da_xac_nhan
     3. Giao cho shipper → dang_giao_hang
     4. Giao thành công → da_giao_hang
     5. (Nếu hủy) → da_huy

9. **Ghi chú Admin**
   - **Mục đích**: Ghi chú nội bộ cho admin (khách hàng không thấy)
   - **Không bắt buộc**
   - **Ví dụ**: 
     - "Khách hàng VIP, ưu tiên giao hàng"
     - "Đã gọi xác nhận, khách đồng ý giao vào buổi sáng"
     - "Lưu ý: Sản phẩm dễ vỡ, đóng gói cẩn thận"

---

### 7. Newsletter Subscription

**Vị trí**: Content Manager → Collection Types → Newsletter Subscription

Quản lý danh sách đăng ký nhận tin.

#### Các trường:

1. **Email** (Bắt buộc, Unique)
2. **Is Active** (Tự động)
3. **Subscribed At** (Tự động)
4. **Unsubscribed At**

---

## Hướng dẫn về SEO

SEO (Search Engine Optimization) giúp website của bạn xuất hiện tốt hơn trên Google.

### Component SEO có các trường:

#### 1. Meta Title (Tiêu đề SEO)
- Tiêu đề hiển thị trên Google
- **Tối đa 60 ký tự**
- Ví dụ: "Amply 4 kênh 1000W chính hãng - Auto Tuan Linh"

#### 2. Meta Description (Mô tả SEO)
- Mô tả hiển thị dưới tiêu đề trên Google
- **Tối đa 160 ký tự**
- Ví dụ: "Amply 4 kênh 1000W chính hãng, chất lượng cao, giá tốt nhất thị trường. Bảo hành 2 năm."

#### 3. Meta Keywords (Từ khóa)
- Các từ khóa liên quan, cách nhau bằng dấu phẩy
- Ví dụ: "amply 4 kênh 1000w, phụ kiện ô tô, chính hãng"

#### 4. Canonical URL
- URL chính của trang (thường để trống, tự động)

#### 5. Open Graph (OG) - Cho Facebook, LinkedIn
- **OG Title**: Tiêu đề khi share lên mạng xã hội
- **OG Description**: Mô tả khi share
- **OG Image**: Ảnh hiển thị khi share (khuyến nghị: 1200x630px)
- **OG Type**: Loại (website, article, product, v.v.)
- **OG URL**: URL khi share
- **OG Site Name**: Tên website

#### 6. Twitter Card
- **Twitter Card Type**: Loại card (summary, summary_large_image, v.v.)
- **Twitter Title**: Tiêu đề cho Twitter
- **Twitter Description**: Mô tả cho Twitter
- **Twitter Image**: Ảnh cho Twitter
- **Twitter Site**: @username của Twitter
- **Twitter Creator**: @username của người tạo

#### 7. Robots
- Mặc định: "index, follow"
- Các giá trị khác:
  - "noindex, nofollow": Không cho Google index
  - "index, nofollow": Index nhưng không follow links

#### 8. Structured Data (JSON-LD)
- Dữ liệu có cấu trúc (chỉ dành cho người có kiến thức kỹ thuật)

### Mẹo viết SEO tốt:

1. **Meta Title**: 
   - Chứa từ khóa chính
   - Hấp dẫn, ngắn gọn
   - Độ dài 50-60 ký tự

2. **Meta Description**:
   - Tóm tắt nội dung
   - Có call-to-action
   - Độ dài 150-160 ký tự

3. **Keywords**:
   - 5-10 từ khóa liên quan
   - Từ khóa chính đứng đầu

---

## Draft & Publish

### Collection Types có chế độ Draft/Publish:

- **Draft (Bản nháp)**: Chưa hiển thị trên website
- **Published (Đã xuất bản)**: Đã hiển thị trên website

### Quy trình làm việc:

1. Tạo nội dung mới → Click **"Save"** → Lưu bản nháp
2. Xem lại, chỉnh sửa nếu cần
3. Click **"Publish"** → Xuất bản (hiển thị trên website)
4. Sau khi publish, nếu chỉnh sửa:
   - Click **"Save"** → Tạo bản nháp mới
   - Click **"Publish"** → Cập nhật bản đã xuất bản

### Single Types:

- **Home, Footer, Footer Contact, Về chúng tôi, Liên hệ**: Không có Draft/Publish
- Thay đổi sẽ áp dụng ngay sau khi **Save**

---

## Các lưu ý quan trọng

### 1. Upload ảnh

- **Định dạng**: JPG, PNG, GIF, WebP
- **Kích thước**: Khuyến nghị không quá 2MB
- **Tên file**: Nên đặt tên có ý nghĩa (ví dụ: "amply-4-kenh-1000w.jpg")
- **Alt text**: Luôn điền alt text cho ảnh (quan trọng cho SEO)

### 2. Slug (URL)

- Slug tự động tạo từ Title
- Có thể chỉnh sửa thủ công nếu cần
- Slug phải là duy nhất
- Không có dấu, khoảng trắng → dùng dấu gạch ngang (-)

### 3. Rich Text Editor

- Có thể format text (bold, italic, underline)
- Thêm link, danh sách, heading
- Chèn ảnh vào nội dung

### 4. Media Library

- Tất cả ảnh/video được lưu trong Media Library
- Có thể tái sử dụng ảnh đã upload
- Có thể xóa ảnh không dùng đến

### 5. Xóa nội dung

- **Cẩn thận** khi xóa! Xóa không thể hoàn tác
- Nên xóa từ bản nháp trước
- Kiểm tra xem nội dung có đang được sử dụng ở đâu không

### 6. Backup

- Nên backup thường xuyên (nếu có quyền)
- Export dữ liệu quan trọng

### 7. Thứ tự hiển thị

- Một số sections có thể sắp xếp thứ tự (drag & drop)
- Thứ tự trong danh sách = thứ tự hiển thị trên website

### 8. Liên kết (Relations)

- Khi chọn sản phẩm/blog/danh mục trong relation:
  - Có thể tìm kiếm bằng tên
  - Có thể chọn nhiều (nếu là many-to-many)
  - Phải chọn từ danh sách có sẵn

---

## Câu hỏi thường gặp (FAQ)

### Q: Làm sao để thêm section mới vào Home?

**A**: Home đã có sẵn tất cả các sections. Bạn chỉ cần:
1. Mở Home
2. Tìm section cần chỉnh sửa
3. Click vào section
4. Điền thông tin hoặc thêm items

### Q: Tại sao sản phẩm không hiển thị trên website?

**A**: Kiểm tra:
1. Sản phẩm đã được **Publish** chưa?
2. Sản phẩm đã được gắn vào **Danh mục cấp 3** chưa?

### Q: Làm sao để sắp xếp thứ tự sản phẩm/blog?

**A**: 
- Có thể sắp xếp trong danh sách (nếu có tính năng drag & drop)
- Hoặc dùng Sort trong danh sách (theo ngày tạo, tên, v.v.)

### Q: Slug bị trùng thì sao?

**A**: Strapi sẽ tự động thêm số vào cuối slug để tránh trùng (ví dụ: "san-pham-1", "san-pham-2")

### Q: Có thể chỉnh sửa nhiều sản phẩm cùng lúc không?

**A**: Không, phải chỉnh sửa từng cái một. Nhưng có thể dùng Bulk Actions để xóa hoặc thay đổi trạng thái nhiều items cùng lúc.

### Q: Làm sao để xem nội dung đã chỉnh sửa trên website?

**A**: 
- Với Collection Types: Phải **Publish** mới hiển thị
- Với Single Types: **Save** là hiển thị ngay
- Truy cập website để xem

---

## Hỗ trợ

Nếu gặp vấn đề hoặc có câu hỏi:

1. Kiểm tra lại tài liệu này
2. Liên hệ Admin/Developer
3. Chụp màn hình lỗi (nếu có) để gửi cho hỗ trợ

---

**Chúc bạn sử dụng hệ thống hiệu quả! 🎉**

*Tài liệu này được cập nhật lần cuối: 2025-01-08*

