'use strict';

const config = {
  app_name: ["wingie"],
  application: {
    name: "wingie",
    environment: process.env.ENVIRONMENT || 'development'
  },
  license_key: "NRAK-XT6Q03T4VR4HR6KAOGDQW2YJYPX" || '',
  labels: {
    environment: process.env.ENVIRONMENT || 'development',
    region: process.env.AWS_REGION || ''
  },
  logging: {
    level: 'info',
    filepath: 'stdout'
  },
  allow_all_headers: true,
  attributes: {
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  },
};

// eslint-disable-next-line no-console
console.info('🚀 NewRelic configuration has been loaded!', {
  // eslint-disable-next-line no-magic-numbers
  config: { ...config, license_key: `${(config.license_key || '').slice(0, 8)}**********` }
});

exports.config = config;
