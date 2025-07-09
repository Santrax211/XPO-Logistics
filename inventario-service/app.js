const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/productos', require('./src/routes/product.routes'));
app.use('/api/categorias', require('./src/routes/category.routes'));
app.use('/api/almacenes', require('./src/routes/warehouse.routes'));
app.use('/api/ubicaciones', require('./src/routes/location.routes'));
app.use('/api/stock', require('./src/routes/stock.routes'));
app.use('/api/transacciones', require('./src/routes/transaction.routes'));

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const specs = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Inventario',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
