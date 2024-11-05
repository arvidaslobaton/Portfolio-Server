module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      // Allow playground in production but with security measures
      playgroundAlways: true,
      // Enable introspection in production for client queries
      introspection: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        // Enable introspection here as well
        introspection: true,
      },
    },
  },
  email: {
    // Your email configuration looks correct
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
