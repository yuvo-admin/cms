const fs = require('fs');
const path = require('path');

export const providerConfig = ({ env }) => {

    const GCS_ENABLE = env.bool('GCS_ENABLE', false);

    if (!GCS_ENABLE) {
        console.log("Upload GCS desabilitado. Usando upload local.");
        return {};
    }

    const gcsKeyPath = env('GCS_SERVICE_ACCOUNT_PATH');
    let gcsServiceAccount = {};

    try {
        const resolvedPath = path.resolve(gcsKeyPath);
        const keyFileContent = fs.readFileSync(resolvedPath, 'utf8');
        gcsServiceAccount = JSON.parse(keyFileContent);
    } catch (e) {
        console.error("Erro ao ler o GCS:", e.message);
        return {};
    }

    const providerOptions = {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: env('GCS_BUCKET_NAME'),
            // keyFilename: env('GCS_SERVICE_ACCOUNT_PATH'),
            baseUrl: env('GCS_BASE_URL', `https://storage.googleapis.com/${env('GCS_BUCKET_NAME')}`),
            basePath: '/assets',
            publicFiles: true,
            uniform: true,
            serviceAccount: gcsServiceAccount,
            generateUploadFileName: (basePath, file) => {
                const bp = basePath || '';
                return `${bp}${file.hash}${file.ext}`;
            },
        }
    }

    return providerOptions
}