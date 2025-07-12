const app = require('./app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT;

const connectWithRetry = async () => {
  let retries = 5;
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('✅ DB conectada');
      app.listen(PORT, () => {
        console.log(`🚀 Servidor http://localhost:${PORT}`);
        console.log(`📚 Swagger: http://localhost:${PORT}/api-docs`);
      });
      break;
    } catch (err) {
      console.error(`❌ Error DB (${retries} intentos restantes):`, err.message);
      retries -= 1;
      console.log('⏳ Reintentando en 5 segundos...');
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

connectWithRetry();