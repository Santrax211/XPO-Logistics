const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const gatewayRoutes = require('./routes/gateway.routes');

dotenv.config();

const app = express();

app.use(morgan('dev'));      
app.use(express.json());    
app.use(cors());            

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gateway',
      version: '1.0.0',
      description: 'API Gateway para enrutar solicitudes a microservicios',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 
app.use('/', gatewayRoutes); 

module.exports = app;