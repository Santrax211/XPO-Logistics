const bcrypt = require('bcryptjs');
const { Users, Roles, UserRole } = require('../models');

exports.createUser = async ({ username, email, password, role }) => {
  
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await Users.create({
    username,
    email,
    password: hashedPassword,
  });

  const foundRole = await Roles.findOne({ where: { name: role } });
  if (!foundRole) throw new Error(`Rol '${role}' no encontrado`);

  await UserRole.create({
    user_id: newUser.user_id,
    role_id: foundRole.role_id,
  });

  return {
    username: newUser.username,
    email: newUser.email,
    role: role,
  };
};

exports.getAllUsers = async () => {
  return Users.findAll({
    include: [{ model: Roles, as: 'roles' }],
  });
};
