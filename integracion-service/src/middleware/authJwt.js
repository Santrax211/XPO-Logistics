const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido', error: err });
    }

    req.userId = decoded.user_id;
    req.userRoles = decoded.roles;
    next();
  });
};

exports.checkRoles = (...roles) => {
  return (req, res, next) => {
    const userRoles = req.userRoles;

    if (roles.some(role => userRoles.includes(role))) {
      return next();
    }

    return res.status(403).json({ message: 'Acceso denegado: Rol insuficiente' });
  };
};
