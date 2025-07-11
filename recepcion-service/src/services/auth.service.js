const jwt = require('jsonwebtoken');
const { models } = require('../models');

/**
 * @param {Object} user 
 * @returns {string} token
 */
exports.generateToken = (user) => {
  return jwt.sign(
    { user_id: user.user_id, roles: user.roles },
    process.env.SECRET_KEY, 
    { expiresIn: '1h' } 
  );
};

/**
 * @param {string} token
 * @returns {Object} 
 */
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded; 
  } catch (error) {
    throw new Error('Token no válido');
  }
};

/**
 * @param {Array} roles
 * @param {Array} userRoles
 * @returns {boolean}
 */
exports.checkRoles = (roles, userRoles) => {
  return roles.some(role => userRoles.includes(role));
};

/**
 * @param {string} username
 * @param {string} password
 * @returns {Object}
 */
exports.authenticateUser = async (username, password) => {
  const user = await models.Users.findOne({ where: { username } });

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error('Contraseña incorrecta');
  }

  return user;
};