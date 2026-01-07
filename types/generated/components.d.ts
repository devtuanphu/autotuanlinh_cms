import type { Schema, Struct } from '@strapi/strapi';

export interface AboutBeforeAfterSection extends Struct.ComponentSchema {
  collectionName: 'components_about_before_after_sections';
  info: {
    description: 'Section tr\u01B0\u1EDBc v\u00E0 sau d\u1EF1 \u00E1n';
    displayName: 'Before & After Section';
    icon: 'images';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'K\u1EBFt qu\u1EA3'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    projects: Schema.Attribute.Component<'about.project-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutButton extends Struct.ComponentSchema {
  collectionName: 'components_about_buttons';
  info: {
    description: 'Component button v\u1EDBi text v\u00E0 URL';
    displayName: 'Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface AboutCertificationCard extends Struct.ComponentSchema {
  collectionName: 'components_about_certification_cards';
  info: {
    description: 'Th\u1EBB ch\u1EE9ng nh\u1EADn ho\u1EB7c gi\u1EA3i th\u01B0\u1EDFng';
    displayName: 'Certification Card';
    icon: 'certificate';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutCertificationsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_certifications_sections';
  info: {
    description: 'Section ch\u1EE9ng nh\u1EADn v\u00E0 gi\u1EA3i th\u01B0\u1EDFng';
    displayName: 'Certifications Section';
    icon: 'award';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ch\u1EE9ng nh\u1EADn'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    certificationCards: Schema.Attribute.Component<
      'about.certification-card',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutCommitmentCard extends Struct.ComponentSchema {
  collectionName: 'components_about_commitment_cards';
  info: {
    description: 'Th\u1EBB cam k\u1EBFt';
    displayName: 'Commitment Card';
    icon: 'shield-alt';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutCommitmentsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_commitments_sections';
  info: {
    description: 'Section cam k\u1EBFt c\u1EE7a c\u00F4ng ty';
    displayName: 'Commitments Section';
    icon: 'check-circle';
  };
  attributes: {
    badge: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Cam k\u1EBFt'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    commitmentCards: Schema.Attribute.Component<'about.commitment-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutCoreValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_about_core_values_sections';
  info: {
    description: 'Section gi\u00E1 tr\u1ECB c\u1ED1t l\u00F5i c\u1EE7a c\u00F4ng ty';
    displayName: 'Core Values Section';
    icon: 'heart';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Gi\u00E1 tr\u1ECB c\u1ED1t l\u00F5i'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
    valueCards: Schema.Attribute.Component<'about.value-card', true>;
  };
}

export interface AboutCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_about_cta_sections';
  info: {
    description: 'Section call-to-action s\u1EB5n s\u00E0ng ph\u1EE5c v\u1EE5';
    displayName: 'CTA Section';
    icon: 'phone-alt';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Li\u00EAn h\u1EC7'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'about.button', false>;
    secondaryButton: Schema.Attribute.Component<'about.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutHistoryTimelineSection extends Struct.ComponentSchema {
  collectionName: 'components_about_history_timeline_sections';
  info: {
    description: 'Section l\u1ECBch s\u1EED ph\u00E1t tri\u1EC3n v\u1EDBi timeline';
    displayName: 'History Timeline Section';
    icon: 'calendar-alt';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'H\u00E0nh tr\u00ECnh'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    milestones: Schema.Attribute.Component<'about.timeline-milestone', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutImageOverlay extends Struct.ComponentSchema {
  collectionName: 'components_about_image_overlays';
  info: {
    description: 'Component cho overlay text tr\u00EAn h\u00ECnh \u1EA3nh';
    displayName: 'Image Overlay';
    icon: 'image';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutIntroductionSection extends Struct.ComponentSchema {
  collectionName: 'components_about_introduction_sections';
  info: {
    description: 'Section gi\u1EDBi thi\u1EC7u v\u1EC1 c\u00F4ng ty';
    displayName: 'Introduction Section';
    icon: 'info-circle';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Gi\u1EDBi thi\u1EC7u'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    imageOverlay: Schema.Attribute.Component<'about.image-overlay', false>;
    paragraphs: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_about_project_cards';
  info: {
    description: 'Th\u1EBB d\u1EF1 \u00E1n tr\u01B0\u1EDBc v\u00E0 sau';
    displayName: 'Project Card';
    icon: 'folder-open';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutShowroomCard extends Struct.ComponentSchema {
  collectionName: 'components_about_showroom_cards';
  info: {
    description: 'Th\u1EBB showroom v\u1EDBi h\u00ECnh \u1EA3nh';
    displayName: 'Showroom Card';
    icon: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutShowroomSection extends Struct.ComponentSchema {
  collectionName: 'components_about_showroom_sections';
  info: {
    description: 'Section kh\u00F4ng gian showroom';
    displayName: 'Showroom Section';
    icon: 'store';
  };
  attributes: {
    badge: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Showroom'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    showroomCards: Schema.Attribute.Component<'about.showroom-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutStoreLocation extends Struct.ComponentSchema {
  collectionName: 'components_about_store_locations';
  info: {
    description: 'Th\u00F4ng tin m\u1ED9t c\u1EEDa h\u00E0ng';
    displayName: 'Store Location';
    icon: 'store';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    mapUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    operatingHours: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface AboutStoreLocationsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_store_locations_sections';
  info: {
    description: 'Section h\u1EC7 th\u1ED1ng c\u1EEDa h\u00E0ng';
    displayName: 'Store Locations Section';
    icon: 'map-marker-alt';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0110\u1ECBa \u0111i\u1EC3m'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    stores: Schema.Attribute.Component<'about.store-location', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_about_team_members';
  info: {
    description: 'Th\u00F4ng tin th\u00E0nh vi\u00EAn \u0111\u1ED9i ng\u0169';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_about_team_sections';
  info: {
    description: 'Section \u0111\u1ED9i ng\u0169 chuy\u00EAn nghi\u1EC7p';
    displayName: 'Team Section';
    icon: 'users';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0110\u1ED9i ng\u0169'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    members: Schema.Attribute.Component<'about.team-member', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface AboutTimelineMilestone extends Struct.ComponentSchema {
  collectionName: 'components_about_timeline_milestones';
  info: {
    description: 'M\u1ED9t m\u1ED1c th\u1EDDi gian trong timeline';
    displayName: 'Timeline Milestone';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutValueCard extends Struct.ComponentSchema {
  collectionName: 'components_about_value_cards';
  info: {
    description: 'Th\u1EBB gi\u00E1 tr\u1ECB c\u1ED1t l\u00F5i';
    displayName: 'Value Card';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutWorkshopSection extends Struct.ComponentSchema {
  collectionName: 'components_about_workshop_sections';
  info: {
    description: 'Section x\u01B0\u1EDFng s\u1EA3n xu\u1EA5t';
    displayName: 'Workshop Section';
    icon: 'tools';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'X\u01B0\u1EDFng s\u1EA3n xu\u1EA5t'>;
    badgeIcon: Schema.Attribute.Media<'images'>;
    featuredImage: Schema.Attribute.Component<'shared.image-with-alt', false>;
    galleryImages: Schema.Attribute.Component<'shared.image-with-alt', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleHighlight: Schema.Attribute.String;
  };
}

export interface DanhmucBaivietDanhMucBaiVietCap2
  extends Struct.ComponentSchema {
  collectionName: 'components_danhmuc_baiviet_danh_muc_bai_viet_cap_2s';
  info: {
    description: 'Danh m\u1EE5c b\u00E0i vi\u1EBFt s\u1EA3n ph\u1EA9m c\u1EA5p 2, n\u1EB1m trong danh m\u1EE5c b\u00E0i vi\u1EBFt s\u1EA3n ph\u1EA9m c\u1EA5p 1';
    displayName: 'Danh m\u1EE5c b\u00E0i vi\u1EBFt s\u1EA3n ph\u1EA9m c\u1EA5p 2';
    icon: 'file';
  };
  attributes: {
    baiViets: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DanhmucBaivietDanhMucBaiVietCap3
  extends Struct.ComponentSchema {
  collectionName: 'components_danhmuc_baiviet_danh_muc_bai_viet_cap_3s';
  info: {
    description: 'Danh m\u1EE5c b\u00E0i vi\u1EBFt s\u1EA3n ph\u1EA9m c\u1EA5p 3, n\u1EB1m trong danh m\u1EE5c b\u00E0i vi\u1EBFt s\u1EA3n ph\u1EA9m c\u1EA5p 2';
    displayName: 'Danh m\u1EE5c b\u00E0i vi\u1EBFt s\u1EA3n ph\u1EA9m c\u1EA5p 3';
    icon: 'file-alt';
  };
  attributes: {
    baiViets: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DanhmucDanhMucCap2 extends Struct.ComponentSchema {
  collectionName: 'components_danhmuc_danh_muc_cap_2s';
  info: {
    displayName: 'Danh m\u1EE5c s\u1EA3n ph\u1EA9m c\u1EA5p 2';
    icon: 'book';
  };
  attributes: {
    danhMucCapBa: Schema.Attribute.Component<'danhmuc.danh-muc-cap-3', true>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DanhmucDanhMucCap3 extends Struct.ComponentSchema {
  collectionName: 'components_danhmuc_danh_muc_cap_3s';
  info: {
    description: 'Danh m\u1EE5c s\u1EA3n ph\u1EA9m c\u1EA5p 3, n\u1EB1m trong danh m\u1EE5c c\u1EA5p 2';
    displayName: 'Danh m\u1EE5c s\u1EA3n ph\u1EA9m c\u1EA5p 3';
    icon: 'bookmark';
  };
  attributes: {
    san_phams: Schema.Attribute.Relation<'oneToMany', 'api::san-pham.san-pham'>;
    seo: Schema.Attribute.Component<'shared.seo', false> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomeBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_home_blog_cards';
  info: {
    description: 'Component th\u1EBB blog v\u1EDBi h\u00ECnh \u1EA3nh, tag, ng\u00E0y \u0111\u0103ng, ti\u00EAu \u0111\u1EC1, m\u00F4 t\u1EA3';
    displayName: 'Blog Card';
    icon: 'file-alt';
  };
  attributes: {
    blog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    publishedDate: Schema.Attribute.Date;
    readingTime: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeContactInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_info_cards';
  info: {
    description: 'Component th\u1EBB th\u00F4ng tin li\u00EAn h\u1EC7';
    displayName: 'Contact Info Card';
    icon: 'address-card';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    details: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeContactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_sections';
  info: {
    description: 'Section li\u00EAn h\u1EC7 v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch th\u00F4ng tin li\u00EAn h\u1EC7';
    displayName: 'Contact Section';
    icon: 'envelope';
  };
  attributes: {
    contactInfoCards: Schema.Attribute.Component<
      'home.contact-info-card',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Li\u00EAn h\u1EC7 v\u1EDBi ch\u00FAng t\u00F4i'>;
  };
}

export interface HomeCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_sections';
  info: {
    description: 'Section call to action v\u1EDBi title, subtitle v\u00E0 buttons';
    displayName: 'CTA Section';
    icon: 'hand-pointer';
  };
  attributes: {
    primaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.cta-button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'S\u1EB5n s\u00E0ng n\u00E2ng c\u1EA5p xe c\u1EE7a b\u1EA1n?'>;
  };
}

export interface HomeFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_items';
  info: {
    description: 'Component c\u00E2u h\u1ECFi v\u00E0 c\u00E2u tr\u1EA3 l\u1EDDi trong FAQ';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_sections';
  info: {
    description: 'Section c\u00E2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p v\u1EDBi icon, title, subtitle v\u00E0 danh s\u00E1ch FAQ';
    displayName: 'FAQ Section';
    icon: 'question-circle';
  };
  attributes: {
    faqItems: Schema.Attribute.Component<'home.faq-item', true>;
    icon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'C\u00E2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p'>;
  };
}

export interface HomeFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_cards';
  info: {
    description: 'Component feature card hi\u1EC3n th\u1ECB c\u00E1c t\u00EDnh n\u0103ng n\u1ED5i b\u1EADt';
    displayName: 'Feature Card';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeaturedProductCard extends Struct.ComponentSchema {
  collectionName: 'components_home_featured_product_cards';
  info: {
    description: 'Component th\u1EBB s\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt v\u1EDBi h\u00ECnh \u1EA3nh, badge, rating, gi\u00E1';
    displayName: 'Featured Product Card';
    icon: 'shopping-bag';
  };
  attributes: {
    badges: Schema.Attribute.Component<'home.product-badge', true>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng \u2192'>;
    image: Schema.Attribute.Media<'images'>;
    originalPrice: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    reviewCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sanPham: Schema.Attribute.Relation<'oneToOne', 'api::san-pham.san-pham'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeaturedProductsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_featured_products_sections';
  info: {
    description: 'Section s\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch s\u1EA3n ph\u1EA9m';
    displayName: 'Featured Products Section';
    icon: 'star';
  };
  attributes: {
    products: Schema.Attribute.Relation<'manyToMany', 'api::san-pham.san-pham'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'S\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt'>;
  };
}

export interface HomeGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_home_gallery_sections';
  info: {
    description: 'Section gallery h\u00ECnh \u1EA3nh th\u1EF1c t\u1EBF v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch \u1EA3nh';
    displayName: 'Gallery Section';
    icon: 'images';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.image-with-alt', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'H\u00ECnh \u1EA3nh th\u1EF1c t\u1EBF'>;
  };
}

export interface HomeHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sliders';
  info: {
    description: 'Component hero slider cho trang home';
    displayName: 'Hero Slider';
    icon: 'slides';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    specialTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomeLatestNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_latest_news_sections';
  info: {
    description: 'Section tin t\u1EE9c m\u1EDBi nh\u1EA5t v\u1EDBi title, subtitle, view all button v\u00E0 danh s\u00E1ch blog';
    displayName: 'Latest News Section';
    icon: 'newspaper';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'manyToMany', 'api::blog.blog'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Tin t\u1EE9c m\u1EDBi nh\u1EA5t'>;
    viewAllButton: Schema.Attribute.Component<'shared.cta-button', false>;
  };
}

export interface HomeNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_home_newsletter_sections';
  info: {
    description: 'Section \u0111\u0103ng k\u00FD nh\u1EADn tin v\u1EDBi icon, title, subtitle, button v\u00E0 privacy text';
    displayName: 'Newsletter Section';
    icon: 'envelope';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0110\u0103ng k\u00FD'>;
    icon: Schema.Attribute.Media<'images'>;
    privacyText: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0110\u0103ng k\u00FD nh\u1EADn tin'>;
  };
}

export interface HomePartnerBrand extends Struct.ComponentSchema {
  collectionName: 'components_home_partner_brands';
  info: {
    description: 'Component th\u01B0\u01A1ng hi\u1EC7u \u0111\u1ED1i t\u00E1c v\u1EDBi logo v\u00E0 t\u00EAn';
    displayName: 'Partner Brand';
    icon: 'building';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface HomePartnerBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_partner_brands_sections';
  info: {
    description: 'Section th\u01B0\u01A1ng hi\u1EC7u \u0111\u1ED1i t\u00E1c v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch th\u01B0\u01A1ng hi\u1EC7u';
    displayName: 'Partner Brands Section';
    icon: 'handshake';
  };
  attributes: {
    partnerBrands: Schema.Attribute.Component<'home.partner-brand', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Th\u01B0\u01A1ng hi\u1EC7u \u0111\u1ED1i t\u00E1c'>;
  };
}

export interface HomeProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_home_process_sections';
  info: {
    description: 'Section quy tr\u00ECnh mua h\u00E0ng v\u1EDBi title, subtitle v\u00E0 c\u00E1c b\u01B0\u1EDBc';
    displayName: 'Process Section';
    icon: 'tasks';
  };
  attributes: {
    steps: Schema.Attribute.Component<'home.process-step', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Quy tr\u00ECnh mua h\u00E0ng'>;
  };
}

export interface HomeProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_home_process_steps';
  info: {
    description: 'Component b\u01B0\u1EDBc trong quy tr\u00ECnh mua h\u00E0ng';
    displayName: 'Process Step';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    stepNumber: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeProductBadge extends Struct.ComponentSchema {
  collectionName: 'components_home_product_badges';
  info: {
    description: 'Component badge cho s\u1EA3n ph\u1EA9m (B\u00E1n ch\u1EA1y, M\u1EDBi, Hot, gi\u1EA3m gi\u00E1)';
    displayName: 'Product Badge';
    icon: 'tag';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['bestseller', 'new', 'hot', 'discount']
    > &
      Schema.Attribute.DefaultTo<'discount'>;
  };
}

export interface HomeProductCategoriesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_product_categories_sections';
  info: {
    description: 'Section danh m\u1EE5c s\u1EA3n ph\u1EA9m v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch danh m\u1EE5c';
    displayName: 'Product Categories Section';
    icon: 'folder-open';
  };
  attributes: {
    danhMucSanPhams: Schema.Attribute.Relation<
      'manyToMany',
      'api::danh-muc-san-pham.danh-muc-san-pham'
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Danh m\u1EE5c s\u1EA3n ph\u1EA9m'>;
  };
}

export interface HomeProductCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_home_product_category_cards';
  info: {
    description: 'Component th\u1EBB danh m\u1EE5c s\u1EA3n ph\u1EA9m, t\u1EF1 \u0111\u1ED9ng l\u1EA5y th\u00F4ng tin t\u1EEB danh m\u1EE5c';
    displayName: 'Product Category Card';
    icon: 'folder';
  };
  attributes: {
    danhMucSanPham: Schema.Attribute.Relation<
      'oneToOne',
      'api::danh-muc-san-pham.danh-muc-san-pham'
    > &
      Schema.Attribute.Required;
  };
}

export interface HomeProfessionalServicesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_home_professional_services_sections';
  info: {
    description: 'Section d\u1ECBch v\u1EE5 chuy\u00EAn nghi\u1EC7p v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch service cards';
    displayName: 'Professional Services Section';
    icon: 'briefcase';
  };
  attributes: {
    serviceCards: Schema.Attribute.Component<'home.service-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'D\u1ECBch v\u1EE5 chuy\u00EAn nghi\u1EC7p'>;
  };
}

export interface HomePromotionCard extends Struct.ComponentSchema {
  collectionName: 'components_home_promotion_cards';
  info: {
    description: 'Component th\u1EBB khuy\u1EBFn m\u00E3i v\u1EDBi h\u00ECnh \u1EA3nh, badge, discount, ng\u00E0y k\u1EBFt th\u00FAc';
    displayName: 'Promotion Card';
    icon: 'gift';
  };
  attributes: {
    badge: Schema.Attribute.Enumeration<['Hot', 'M\u1EDBi', 'FREE']>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Xem ngay \u2192'>;
    description: Schema.Attribute.Text;
    discount: Schema.Attribute.String;
    endDate: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'>;
    isFree: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_service_cards';
  info: {
    description: 'Component th\u1EBB d\u1ECBch v\u1EE5 v\u1EDBi icon, h\u00ECnh \u1EA3nh, ti\u00EAu \u0111\u1EC1, m\u00F4 t\u1EA3 v\u00E0 c\u00E1c t\u00EDnh n\u0103ng';
    displayName: 'Service Card';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'home.service-feature', true>;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_home_service_features';
  info: {
    description: 'Component m\u1ED9t t\u00EDnh n\u0103ng trong service card';
    displayName: 'Service Feature';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSpecialPromotionsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_special_promotions_sections';
  info: {
    description: 'Section khuy\u1EBFn m\u00E3i \u0111\u1EB7c bi\u1EC7t v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch promotion cards';
    displayName: 'Special Promotions Section';
    icon: 'gift';
  };
  attributes: {
    promotionCards: Schema.Attribute.Component<'home.promotion-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'KHUY\u1EBEN M\u00C3I \u0110\u1EB6C BI\u1EC6T'>;
  };
}

export interface HomeStatCard extends Struct.ComponentSchema {
  collectionName: 'components_home_stat_cards';
  info: {
    description: 'Component th\u1EBB th\u1ED1ng k\u00EA v\u1EDBi icon, s\u1ED1 v\u00E0 m\u00F4 t\u1EA3';
    displayName: 'Stat Card';
    icon: 'chart-line';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_stats_sections';
  info: {
    description: 'Section th\u1ED1ng k\u00EA v\u1EDBi c\u00E1c stat cards';
    displayName: 'Stats Section';
    icon: 'chart-bar';
  };
  attributes: {
    statCards: Schema.Attribute.Component<'home.stat-card', true>;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    description: 'Component \u0111\u00E1nh gi\u00E1 c\u1EE7a kh\u00E1ch h\u00E0ng';
    displayName: 'Testimonial';
    icon: 'star';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    customerName: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    testimonial: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomeTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials_sections';
  info: {
    description: 'Section \u0111\u00E1nh gi\u00E1 kh\u00E1ch h\u00E0ng v\u1EDBi title, subtitle v\u00E0 danh s\u00E1ch testimonials';
    displayName: 'Testimonials Section';
    icon: 'comments';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'home.testimonial', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Kh\u00E1ch h\u00E0ng n\u00F3i g\u00EC v\u1EC1 ch\u00FAng t\u00F4i'>;
  };
}

export interface HomeWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_uss';
  info: {
    description: 'Section t\u1EA1i sao ch\u1ECDn Auto Tuan Linh v\u1EDBi title, subtitle v\u00E0 feature cards';
    displayName: 'Why Choose Us';
    icon: 'question-circle';
  };
  attributes: {
    featureCards: Schema.Attribute.Component<'home.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'T\u1EA1i sao ch\u1ECDn Auto Tuan Linh?'>;
  };
}

export interface SharedContactInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_info_items';
  info: {
    description: 'Component th\u00F4ng tin li\u00EAn h\u1EC7 v\u1EDBi icon, title v\u00E0 value';
    displayName: 'Contact Info Item';
    icon: 'phone';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    description: 'Component button CTA v\u1EDBi text, icon v\u00E0 URL';
    displayName: 'CTA Button';
    icon: 'mouse-pointer';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['phone', 'arrow-right', 'arrow-left', 'none']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    style: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedCustomerInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_infos';
  info: {
    description: 'Component th\u00F4ng tin kh\u00E1ch h\u00E0ng';
    displayName: 'Customer Info';
    icon: 'user';
  };
  attributes: {
    diaChi: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    ghiChu: Schema.Attribute.Text;
    hoVaTen: Schema.Attribute.String & Schema.Attribute.Required;
    phuongXa: Schema.Attribute.String & Schema.Attribute.Required;
    quanHuyen: Schema.Attribute.String & Schema.Attribute.Required;
    soDienThoai: Schema.Attribute.String & Schema.Attribute.Required;
    tinhThanhPho: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    description: 'Component c\u1ED9t trong footer v\u1EDBi heading v\u00E0 danh s\u00E1ch links';
    displayName: 'Footer Column';
    icon: 'columns';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'shared.footer-link', true>;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    description: 'Component link trong footer';
    displayName: 'Footer Link';
    icon: 'link';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedImageWithAlt extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_with_alts';
  info: {
    description: 'Component h\u00ECnh \u1EA3nh k\u00E8m alt text';
    displayName: 'Image With Alt';
    icon: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_order_items';
  info: {
    description: 'Component s\u1EA3n ph\u1EA9m trong \u0111\u01A1n h\u00E0ng';
    displayName: 'Order Item';
    icon: 'shopping-cart';
  };
  attributes: {
    giaBan: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sanPham: Schema.Attribute.Relation<'manyToOne', 'api::san-pham.san-pham'>;
    soLuong: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    thanhTien: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SharedPaymentMethod extends Struct.ComponentSchema {
  collectionName: 'components_shared_payment_methods';
  info: {
    description: 'Component ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n';
    displayName: 'Payment Method';
    icon: 'credit-card';
  };
  attributes: {
    loai: Schema.Attribute.Enumeration<
      ['cod', 'bank_transfer', 'momo', 'vnpay']
    > &
      Schema.Attribute.Required;
    moTa: Schema.Attribute.Text;
    ten: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProductReview extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_reviews';
  info: {
    description: 'Component \u0111\u00E1nh gi\u00E1 s\u1EA3n ph\u1EA9m v\u1EDBi t\u00EAn, email, rating v\u00E0 n\u1ED9i dung';
    displayName: 'Product Review';
    icon: 'star';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    customerName: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    isApproved: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Component ch\u1EE9a c\u00E1c th\u00F4ng tin SEO cho trang web';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogSiteName: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'product', 'video', 'music']
    > &
      Schema.Attribute.DefaultTo<'website'>;
    ogUrl: Schema.Attribute.String;
    robots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index, follow'>;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterCreator: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterSite: Schema.Attribute.String;
    twitterTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    description: 'Component social media v\u1EDBi icon v\u00E0 URL';
    displayName: 'Social Media';
    icon: 'share-alt';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSpecification extends Struct.ComponentSchema {
  collectionName: 'components_shared_specifications';
  info: {
    description: 'Component \u0111\u1EC3 t\u1EA1o b\u1EA3ng th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt v\u1EDBi key-value pairs';
    displayName: 'Th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt';
    icon: 'table';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.before-after-section': AboutBeforeAfterSection;
      'about.button': AboutButton;
      'about.certification-card': AboutCertificationCard;
      'about.certifications-section': AboutCertificationsSection;
      'about.commitment-card': AboutCommitmentCard;
      'about.commitments-section': AboutCommitmentsSection;
      'about.core-values-section': AboutCoreValuesSection;
      'about.cta-section': AboutCtaSection;
      'about.history-timeline-section': AboutHistoryTimelineSection;
      'about.image-overlay': AboutImageOverlay;
      'about.introduction-section': AboutIntroductionSection;
      'about.project-card': AboutProjectCard;
      'about.showroom-card': AboutShowroomCard;
      'about.showroom-section': AboutShowroomSection;
      'about.store-location': AboutStoreLocation;
      'about.store-locations-section': AboutStoreLocationsSection;
      'about.team-member': AboutTeamMember;
      'about.team-section': AboutTeamSection;
      'about.timeline-milestone': AboutTimelineMilestone;
      'about.value-card': AboutValueCard;
      'about.workshop-section': AboutWorkshopSection;
      'danhmuc-baiviet.danh-muc-bai-viet-cap-2': DanhmucBaivietDanhMucBaiVietCap2;
      'danhmuc-baiviet.danh-muc-bai-viet-cap-3': DanhmucBaivietDanhMucBaiVietCap3;
      'danhmuc.danh-muc-cap-2': DanhmucDanhMucCap2;
      'danhmuc.danh-muc-cap-3': DanhmucDanhMucCap3;
      'home.blog-card': HomeBlogCard;
      'home.contact-info-card': HomeContactInfoCard;
      'home.contact-section': HomeContactSection;
      'home.cta-section': HomeCtaSection;
      'home.faq-item': HomeFaqItem;
      'home.faq-section': HomeFaqSection;
      'home.feature-card': HomeFeatureCard;
      'home.featured-product-card': HomeFeaturedProductCard;
      'home.featured-products-section': HomeFeaturedProductsSection;
      'home.gallery-section': HomeGallerySection;
      'home.hero-slider': HomeHeroSlider;
      'home.latest-news-section': HomeLatestNewsSection;
      'home.newsletter-section': HomeNewsletterSection;
      'home.partner-brand': HomePartnerBrand;
      'home.partner-brands-section': HomePartnerBrandsSection;
      'home.process-section': HomeProcessSection;
      'home.process-step': HomeProcessStep;
      'home.product-badge': HomeProductBadge;
      'home.product-categories-section': HomeProductCategoriesSection;
      'home.product-category-card': HomeProductCategoryCard;
      'home.professional-services-section': HomeProfessionalServicesSection;
      'home.promotion-card': HomePromotionCard;
      'home.service-card': HomeServiceCard;
      'home.service-feature': HomeServiceFeature;
      'home.special-promotions-section': HomeSpecialPromotionsSection;
      'home.stat-card': HomeStatCard;
      'home.stats-section': HomeStatsSection;
      'home.testimonial': HomeTestimonial;
      'home.testimonials-section': HomeTestimonialsSection;
      'home.why-choose-us': HomeWhyChooseUs;
      'shared.contact-info-item': SharedContactInfoItem;
      'shared.cta-button': SharedCtaButton;
      'shared.customer-info': SharedCustomerInfo;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-link': SharedFooterLink;
      'shared.image-with-alt': SharedImageWithAlt;
      'shared.order-item': SharedOrderItem;
      'shared.payment-method': SharedPaymentMethod;
      'shared.product-review': SharedProductReview;
      'shared.seo': SharedSeo;
      'shared.social-media': SharedSocialMedia;
      'shared.specification': SharedSpecification;
    }
  }
}
