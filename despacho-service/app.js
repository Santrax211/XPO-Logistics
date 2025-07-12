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
      title: 'Despacho Service API',
      version: '1.0.0',
      description: 'API para gestionar el proceso de despacho de productos',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const dispatchOrderRoutes = require('./src/routes/dispatchOrder.routes');
const dispatchItemRoutes = require('./src/routes/dispatchItem.routes');
const pickingRoutes = require('./src/routes/picking.routes');
const dispatchStatusRoutes = require('./src/routes/dispatchStatus.routes');
const carrierRoutes = require('./src/routes/carrier.routes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Documentación Swagger
app.use('/api/dispatch-orders', dispatchOrderRoutes);
app.use('/api/dispatch-items', dispatchItemRoutes);
app.use('/api/picking', pickingRoutes);
app.use('/api/dispatch-status', dispatchStatusRoutes);
app.use('/api/carriers', carrierRoutes);

module.exports = app;