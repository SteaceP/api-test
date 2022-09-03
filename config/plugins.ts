export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'cloudflare-pages': {
    enabled: true,
    config: {
      instances: [
        {
          name: "coderage-backend-prod",
          hook_url: 'https://coderage-backend.pages.dev'
        },
      ]
    }
  },
  comments: {
    enabled: true,
    config: {
      gql: {
        auth: true, // Default: false
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 12,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        cache: "bounded"
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env(
          "SENDGRID_API_KEY"
        ),
      },
      settings: {
        defaultFrom: "admin@coderage.pro",
        defaultReplyTo: "admin@coderage.pro",
        testAddress: "admin@coderage.pro",
      },
    },
  },
});
