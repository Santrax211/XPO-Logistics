const { Location } = require('../models');

exports.getAll = async (req, res) => {
  const ubicaciones = await Location.findAll();
  res.json(ubicaciones);
};

exports.getById = async (req, res) => {
  const ubicacion = await Location.findByPk(req.params.id);
  if (!ubicacion) return res.status(404).json({ message: 'Ubicación no encontrada' });
  res.json(ubicacion);
};

exports.create = async (req, res) => {
  const nueva = await Location.create(req.body);
  res.status(201).json(nueva);
};

exports.update = async (req, res) => {
  const ubicacion = await Location.findByPk(req.params.id);
  if (!ubicacion) return res.status(404).json({ message: 'Ubicación no encontrada' });
  await ubicacion.update(req.body);
  res.json(ubicacion);
};

exports.delete = async (req, res) => {
  const ubicacion = await Location.findByPk(req.params.id);
  if (!ubicacion) return res.status(404).json({ message: 'Ubicación no encontrada' });
  await ubicacion.destroy();
  res.json({ message: 'Ubicación eliminada' });
};