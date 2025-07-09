const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async ({ username, email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: hashedPassword, role });
  return { username: newUser.username, email: newUser.email, role: newUser.role };
};

exports.login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) throw new Error('Usuario no encontrado');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Contraseña incorrecta');

  const token = jwt.sign(
    { user_id: user.user_id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '4h' }
  );

  return token;
};
