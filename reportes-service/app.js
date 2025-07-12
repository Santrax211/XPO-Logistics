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
      title: 'Reportes Service API',
      version: '1.0.0',
      description: 'API para generar y almacenar reportes',
    },
  },
  apis: ['./routes/*.js'], // Rutas para documentar
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const reportRequestRoutes = require('./src/routes/reportRequest.routes');
const reportResultRoutes = require('./src/routes/reportResult.routes');
const periodicSummaryRoutes = require('./src/routes/periodicSummary.routes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Documentación Swagger
app.use('/api/report-requests', reportRequestRoutes);
app.use('/api/report-results', reportResultRoutes);
app.use('/api/periodic-summary', periodicSummaryRoutes);

module.exports = app;