const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Users, Roles, UserRole } = require('../models');
require('dotenv').config();

// Registro de usuario con rol asignado
exports.register = async ({ username, email, password, role }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await Users.create({
    username,
    email,
    password: hashedPassword
  });

  // Buscar el ID del rol correspondiente
  const foundRole = await Roles.findOne({ where: { name: role } });
  if (!foundRole) throw new Error(`Rol '${role}' no encontrado`);

  await UserRole.create({
    user_id: newUser.user_id,
    role_id: foundRole.role_id
  });

  return {
    username: newUser.username,
    email: newUser.email,
    role: role
  };
};

// Inicio de sesión
exports.login = async (username, password) => {
  const user = await Users.findOne({ where: { username } });
  if (!user) throw new Error('Usuario no encontrado');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Contraseña incorrecta');

  // Obtener el rol del usuario
  const userRole = await UserRole.findOne({ where: { user_id: user.user_id } });
  if (!userRole) throw new Error('Rol no asignado al usuario');

  const role = await Roles.findByPk(userRole.role_id);

  const token = jwt.sign(
    {
      user_id: user.user_id,
      username: user.username,
      role: role.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '4h' }
  );

  return token;
};
