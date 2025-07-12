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
      title: 'Recepcion Service API',
      version: '1.0.0',
      description: 'API para gestionar el proceso de recepción de productos',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const supplierRoutes = require('./src/routes/supplier.routes');
const ingressRoutes = require('./src/routes/ingress.routes');
const ingressItemRoutes = require('./src/routes/ingressItem.routes');
const ingressValidationRoutes = require('./src/routes/ingressValidation.routes');
const attachedDocumentRoutes = require('./src/routes/attachedDocument.routes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Documentación Swagger
app.use('/api/suppliers', supplierRoutes);
app.use('/api/ingresses', ingressRoutes);
app.use('/api/ingresses/items', ingressItemRoutes);
app.use('/api/ingresses/validations', ingressValidationRoutes);
app.use('/api/ingresses/documents', attachedDocumentRoutes);

module.exports = app;
