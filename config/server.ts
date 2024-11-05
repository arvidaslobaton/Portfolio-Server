module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", process.env.PORT || 1337),
  app: {
    keys: env.array("APP_KEYS", ["defaultKey1", "defaultKey2"]),
  },
});
