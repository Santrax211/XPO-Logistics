const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Verifica si el token JWT es válido
 */
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ message: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido o expirado' });
    req.user = decoded;
    next();
  });
};

/**
 * Verifica si el usuario tiene el rol requerido
 * Siempre permite al rol 'SuperAdmin'
 */
exports.checkRole = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user || (req.user.role !== requiredRole && req.user.role !== 'SuperAdmin')) {
      return res.status(403).json({ message: 'Acceso denegado: rol insuficiente' });
    }
    next();
  };
};
