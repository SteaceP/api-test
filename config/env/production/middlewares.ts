export default [
  "strapi::errors",
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://dockerserver.com', 'https://api.dockerservers.com', 'https://api.dockerservers.com/graphql', 'https://coderage.pro', 'http://localhost:3000', 'https://coderage.pro', 'https://test.coderage.pro/graphql', 'https://test.coderage.pro'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: '*',
      keepHeaderOnError: true,
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Code Rage API'
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
