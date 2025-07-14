// server.js
const app = require('./app');
const { sequelize } = require('./models');
const dotenv = require('dotenv');

dotenv.config();

// validar conexión y sincronizar modelos
sequelize.authenticate()
  .then(() => {
    console.log('✔️ Conexión a la DB establecida');
    return sequelize.sync({ /* alter: true */ }); // quita las llaves si no quieres que modifique tablas en producción
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Integración Service corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ No se pudo conectar a la DB:', err);
    process.exit(1);
  });
