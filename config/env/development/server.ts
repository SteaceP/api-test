export default ({ env }) => ({
  host: "0.0.0.0",
  port: "1338",
  app: {
    keys: env.array("APP_KEYS"),
  },
  emitErrors: true,
});
