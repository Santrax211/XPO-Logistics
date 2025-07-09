const { Warehouse } = require('../models');

exports.getAll = async (req, res) => {
  const almacenes = await Warehouse.findAll();
  res.json(almacenes);
};

exports.getById = async (req, res) => {
  const almacen = await Warehouse.findByPk(req.params.id);
  if (!almacen) return res.status(404).json({ message: 'Almacén no encontrado' });
  res.json(almacen);
};

exports.create = async (req, res) => {
  const nuevo = await Warehouse.create(req.body);
  res.status(201).json(nuevo);
};

exports.update = async (req, res) => {
  const actualizado = await Warehouse.update(req.body, { where: { warehouse_id: req.params.id } });
  res.json({ message: 'Almacén actualizado', actualizado });
};

exports.delete = async (req, res) => {
  await Warehouse.destroy({ where: { warehouse_id: req.params.id } });
  res.json({ message: 'Almacén eliminado' });
};
