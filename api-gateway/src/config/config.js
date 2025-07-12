require('dotenv').config();

module.exports = {
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
  },
  
  services: {
    inventarioService: process.env.INVENTARIO_SERVICE_URL,
    despachoService: process.env.DESPACHO_SERVICE_URL,
    recepcionService: process.env.RECEPCION_SERVICE_URL,
    reportesService: process.env.REPORTES_SERVICE_URL,
    integracionService: process.env.INTEGRACION_SERVICE_URL,
  },

  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION || '4h',
};