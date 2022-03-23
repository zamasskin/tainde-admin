module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '716864f56c9fe6dfc429f85a1ee8d342'),
  },
});
