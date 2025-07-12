const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();

const app = express();

app.use(cors()); 
app.use(morgan('dev')); 
app.use(express.json()); 

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Integración Service API',
      version: '1.0.0',
      description: 'API para integrar y registrar eventos entre sistemas externos',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const erpLogRoutes = require('./routes/erpLog.routes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Documentación Swagger
app.use('/api/erp-logs', erpLogRoutes);

module.exports = app;
