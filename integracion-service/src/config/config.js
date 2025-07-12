require('dotenv').config();

module.exports = {
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
  },
  api: {
    erpUrl: process.env.ERP_URL,
    paymentGatewayUrl: process.env.PAYMENT_GATEWAY_URL,
    stripeApiKey: process.env.STRIPE_API_KEY,
  },
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION || '4h',
};
