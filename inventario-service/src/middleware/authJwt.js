const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Token no proporcionado o formato incorrecto' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido o expirado' });
    req.user = decoded;
    next();
  });
};

// Rol único requerido
exports.checkRole = (requiredRole) => {
  return (req, res, next) => {
    if (!req.user || (req.user.role !== requiredRole && req.user.role !== 'SuperAdmin')) {
      return res.status(403).json({ message: 'Acceso denegado: rol insuficiente' });
    }
    next();
  };
};

// Opcional: múltiples roles permitidos
exports.checkRoles = (roles = []) => {
  return (req, res, next) => {
    if (!req.user || (!roles.includes(req.user.role) && req.user.role !== 'SuperAdmin')) {
      return res.status(403).json({ message: 'Acceso denegado: roles insuficientes' });
    }
    next();
  };
};
