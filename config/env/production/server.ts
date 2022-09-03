export default ({ env }) => ({
  url: "https://api.coderage.pro",
  emitErrors: false,
  proxy: env.bool('IS_PROXIED'),
});
