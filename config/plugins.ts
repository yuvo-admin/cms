import { providerConfig, ckeditor5Config } from './plugins/index'

module.exports = ({ env }) => {

    return {
        upload: {
            config: {
                ...providerConfig({ env })
            },
        },
        ckeditor5: {
            enabled: true,
            config: {
                ...ckeditor5Config
            }
        }
    }
}