const roleService = require('../services/role.service');

exports.createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const newRole = await roleService.createRole(name);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear rol', error: error.message });
  }
};

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener roles', error: error.message });
  }
};
