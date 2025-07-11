const { Roles } = require('../models');

exports.createRole = async (name) => {
  const newRole = await Roles.create({ name });
  return newRole;
};

exports.getAllRoles = async () => {
  return Roles.findAll();
};
