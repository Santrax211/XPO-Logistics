const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/config');

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Aquí iría la lógica para validar las credenciales (p.ej., consultar un microservicio)
  
  const user = { id: 1, username }; // Usuario de ejemplo (esto debería ser dinámico)

  const token = jwt.sign(
    { user_id: user.id, username: user.username },
    jwtSecret,
    { expiresIn: jwtExpiration }
  );

  res.status(200).json({ token });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido', error: err });
    }

    req.userId = decoded.user_id;
    req.username = decoded.username;
    next();
  });
};
