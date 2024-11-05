module.exports = {
  Mutation: {
    sendContactEmail: async (parent, args, { strapi }) => {
      const { firstName, lastName, email, message, phone } = args;

      try {
        await strapi.plugins["email"].services.email.send({
          to: process.env.EMAIL_USER,
          from: email,
          subject: "Contact Form Submission - Portfolio",
          html: `
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });

        return {
          success: true,
          message: "Email sent successfully",
        };
      } catch (error) {
        console.error("Email error:", error);
        return {
          success: false,
          message: "Failed to send email",
        };
      }
    },
  },
};
