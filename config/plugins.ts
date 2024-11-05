// config/plugins.js
module.exports = {
  // GraphQL configuration
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: process.env.NODE_ENV === "development",
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: process.env.NODE_ENV === "development",
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        secure: false,
        // Add additional security for production
        ...(process.env.NODE_ENV === "production" && {
          tls: {
            rejectUnauthorized: true,
          },
        }),
      },
      settings: {
        defaultFrom: process.env.EMAIL_FROM,
        defaultReplyTo: process.env.EMAIL_REPLY_TO,
      },
    },
  },
};
