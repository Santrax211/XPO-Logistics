const jwt = require('jsonwebtoken');
const { models } = require('../models');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido', error: err });
    }

    req.userId = decoded.user_id;
    req.userRoles = decoded.roles;

    next();
  });
};

/**
 * @param {Array} roles 
 */
exports.checkRoles = (...roles) => {
  return (req, res, next) => {
    const userRoles = req.userRoles;

    if (roles.some(role => userRoles.includes(role))) {
      return next();
    }

    return res.status(403).json({ message: 'Acceso denegado: Rol insuficiente' });
  };
};
