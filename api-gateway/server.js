const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de servicios
const services = {
  '/api/inventario': 'http://inventario:3001',
  '/api/despacho': 'http://despacho:3002',
  '/api/reportes': 'http://reportes:3003',
  '/api/seguridad': 'http://seguridad:3004',
  '/api/recepcion': 'http://recepcion:3005'
};

// Crear proxies
Object.entries(services).forEach(([path, target]) => {
  app.use(path, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${path}`]: ''
    },
    onError: (err, req, res) => {
      console.error(`Proxy error for ${path}:`, err.message);
      res.status(500).json({ error: 'Service unavailable' });
    }
  }));
});

// Ruta raíz para verificar que funciona
app.get('/', (req, res) => {
  res.json({ 
    message: 'XPO Logistics API Gateway',
    availableServices: [
      '/api/inventario',
      '/api/despacho', 
      '/api/reportes',
      '/api/seguridad',
      '/api/recepcion'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`);
  console.log(`📋 Available services: ${Object.keys(services).join(', ')}`);
});
