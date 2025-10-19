import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // Suas configurações de locale (se necessário)
    ],
    // Configuração do CKEditor
    ckeditor: {
      editor: {
        style: {
          styles: [
            {
              name: 'Destaque',
              element: 'p',
              classes: 'text-highlight'
            },
            {
              name: 'Texto Vermelho',
              element: 'span',
              classes: 'text-red'
            },
            {
              name: 'Box Informativo',
              element: 'div',
              classes: 'info-box'
            }
          ]
        },
        toolbar: {
          items: [
            'heading',
            'styleDropdown', // Menu de estilos
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'blockQuote',
            'mediaEmbed',
            'undo',
            'redo'
          ]
        }
      }
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};