import { providerConfig } from './plugins.config'

module.exports = ({ env }) => {

    return {
        upload: {
            config: {
                ...providerConfig({env})
            },
        },
        ckeditor5: {
            enabled: true,
            config: {
                editor: {
                    fontSize: {
                        options: [],
                        supportAllValues: true
                    }
                },

            }
        }
    }
}