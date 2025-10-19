import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    button: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface BlocksChart extends Struct.ComponentSchema {
  collectionName: 'components_blocks_charts';
  info: {
    description: '';
    displayName: 'Chart';
  };
  attributes: {
    chart: Schema.Attribute.Component<'shared.chart', false>;
    description: Schema.Attribute.Text;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ck_editors';
  info: {
    description: '';
    displayName: 'CKEditor';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grids';
  info: {
    description: '';
    displayName: 'Grid Cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.card', true>;
    columns: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGridCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grid_ck_editors';
  info: {
    description: '';
    displayName: 'Grid CKEditor';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.ck-editor', true>;
    columns: Schema.Attribute.Integer;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    divider: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface BlocksReview extends Struct.ComponentSchema {
  collectionName: 'components_blocks_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    buttonText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    review: Schema.Attribute.Component<'ui.review', false>;
  };
}

export interface BlocksTable extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tables';
  info: {
    description: '';
    displayName: 'Table';
  };
  attributes: {
    description: Schema.Attribute.Text;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    table: Schema.Attribute.Component<'shared.table', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlogCategoriesTags extends Struct.ComponentSchema {
  collectionName: 'components_blog_categories_tags';
  info: {
    displayName: 'CategoriesTags';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlogCategory extends Struct.ComponentSchema {
  collectionName: 'components_blog_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlogCategoryMostViewed extends Struct.ComponentSchema {
  collectionName: 'components_blog_category_most_vieweds';
  info: {
    displayName: 'CategoryMostViewed';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    title: Schema.Attribute.String;
  };
}

export interface CalculatorBanner extends Struct.ComponentSchema {
  collectionName: 'components_calculator_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CalculatorCalculators extends Struct.ComponentSchema {
  collectionName: 'components_calculator_calculators';
  info: {
    displayName: 'Calculators';
  };
  attributes: {
    calculators: Schema.Attribute.Relation<
      'oneToMany',
      'api::calculator.calculator'
    >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    divider: Schema.Attribute.Boolean;
  };
}

export interface CalculatorInformation extends Struct.ComponentSchema {
  collectionName: 'components_calculator_information';
  info: {
    displayName: 'Information';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface CalculatorsBanner extends Struct.ComponentSchema {
  collectionName: 'components_calculators_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.Component<'ui.link', false>;
    tag: Schema.Attribute.Component<'ui.tag', false>;
    title: Schema.Attribute.String;
  };
}

export interface CalculatorsCalculators extends Struct.ComponentSchema {
  collectionName: 'components_calculators_calculators';
  info: {
    displayName: 'Calculators';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    calculators: Schema.Attribute.Relation<
      'oneToMany',
      'api::calculator.calculator'
    >;
    divider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    description: '';
    displayName: 'banner';
    icon: 'car';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.Text;
    tag: Schema.Attribute.Component<'ui.tag', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeBlog extends Struct.ComponentSchema {
  collectionName: 'components_home_blogs';
  info: {
    description: '';
    displayName: 'Blog';
    icon: 'alien';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    categoryTitle: Schema.Attribute.String;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'Faq';
    icon: 'alien';
  };
  attributes: {
    faq: Schema.Attribute.Component<'ui.faq', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeTools extends Struct.ComponentSchema {
  collectionName: 'components_home_tools';
  info: {
    displayName: 'Tools';
    icon: 'alien';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    tools: Schema.Attribute.Component<'ui.tools', true>;
  };
}

export interface SharedChart extends Struct.ComponentSchema {
  collectionName: 'components_shared_charts';
  info: {
    description: '';
    displayName: 'Chart';
  };
  attributes: {
    datasets: Schema.Attribute.JSON;
    disclaimer: Schema.Attribute.Text;
    labels: Schema.Attribute.JSON;
    options: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['bar', 'bubble', 'doughnut', 'line', 'polarArea', 'radar,', 'scatter']
    > &
      Schema.Attribute.DefaultTo<'bar'>;
  };
}

export interface SharedCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_ck_editors';
  info: {
    displayName: 'CKEditor';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    description: '';
    displayName: 'Table';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text;
    headers: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.table-row', true>;
    title: Schema.Attribute.Text;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
    icon: 'paint';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['default', 'left', 'right']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface UiFaq extends Struct.ComponentSchema {
  collectionName: 'components_ui_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'paint';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface UiIcon extends Struct.ComponentSchema {
  collectionName: 'components_ui_icons';
  info: {
    displayName: 'icon';
    icon: 'paint';
  };
  attributes: {
    fill: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.DefaultTo<'md'>;
    stroke: Schema.Attribute.String;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    link: Schema.Attribute.Text;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface UiReview extends Struct.ComponentSchema {
  collectionName: 'components_ui_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    disclaimer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    rate: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiTableHeader extends Struct.ComponentSchema {
  collectionName: 'components_ui_table_headers';
  info: {
    displayName: 'TableHeader';
  };
  attributes: {
    header: Schema.Attribute.Text;
  };
}

export interface UiTableRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_table_rows';
  info: {
    displayName: 'TableRow';
  };
  attributes: {
    row: Schema.Attribute.Text;
  };
}

export interface UiTag extends Struct.ComponentSchema {
  collectionName: 'components_ui_tags';
  info: {
    displayName: 'Tag';
    icon: 'paint';
  };
  attributes: {
    color: Schema.Attribute.String;
    fill: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    stroke: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface UiTools extends Struct.ComponentSchema {
  collectionName: 'components_ui_tools';
  info: {
    description: '';
    displayName: 'Tools';
    icon: 'paint';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    bgColor: Schema.Attribute.String;
    button: Schema.Attribute.Component<'ui.button', false>;
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Boolean;
    icon: Schema.Attribute.Component<'ui.icon', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    soon: Schema.Attribute.Boolean;
    textColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner': BlocksBanner;
      'blocks.chart': BlocksChart;
      'blocks.ck-editor': BlocksCkEditor;
      'blocks.grid': BlocksGrid;
      'blocks.grid-ck-editor': BlocksGridCkEditor;
      'blocks.review': BlocksReview;
      'blocks.table': BlocksTable;
      'blog.categories-tags': BlogCategoriesTags;
      'blog.category': BlogCategory;
      'blog.category-most-viewed': BlogCategoryMostViewed;
      'calculator.banner': CalculatorBanner;
      'calculator.calculators': CalculatorCalculators;
      'calculator.information': CalculatorInformation;
      'calculators.banner': CalculatorsBanner;
      'calculators.calculators': CalculatorsCalculators;
      'home.banner': HomeBanner;
      'home.blog': HomeBlog;
      'home.faq': HomeFaq;
      'home.tools': HomeTools;
      'shared.chart': SharedChart;
      'shared.ck-editor': SharedCkEditor;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.table': SharedTable;
      'ui.button': UiButton;
      'ui.card': UiCard;
      'ui.faq': UiFaq;
      'ui.icon': UiIcon;
      'ui.link': UiLink;
      'ui.review': UiReview;
      'ui.table-header': UiTableHeader;
      'ui.table-row': UiTableRow;
      'ui.tag': UiTag;
      'ui.tools': UiTools;
    }
  }
}
