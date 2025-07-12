const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/auth.controller');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config/config');


router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const token = jwt.sign({ username }, config.jwtSecret, { expiresIn: config.jwtExpiration });
  res.json({ token });
});

router.use('/inventario', verifyToken, createProxyMiddleware({
  target: config.services.inventarioService,
  changeOrigin: true,
  pathRewrite: { '^/inventario': '' },
}));

router.use('/despacho', verifyToken, createProxyMiddleware({
  target: config.services.despachoService,
  changeOrigin: true,
  pathRewrite: { '^/despacho': '' },
}));

router.use('/recepcion', verifyToken, createProxyMiddleware({
  target: config.services.recepcionService,
  changeOrigin: true,
  pathRewrite: { '^/recepcion': '' },
}));

router.use('/reportes', verifyToken, createProxyMiddleware({
  target: config.services.reportesService,
  changeOrigin: true,
  pathRewrite: { '^/reportes': '' },
}));

router.use('/integracion', verifyToken, createProxyMiddleware({
  target: config.services.integracionService,
  changeOrigin: true,
  pathRewrite: { '^/integracion': '' },
}));

module.exports = router;
