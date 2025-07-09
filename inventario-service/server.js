const app = require('./app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB conectada');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor http://localhost:${PORT}`);
      console.log(`📚 Swagger: http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('❌ Error DB:', err);
  }
})();
