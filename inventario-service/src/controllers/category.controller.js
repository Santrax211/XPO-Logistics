const { Category } = require('../models');

exports.getAll = async (req, res) => {
  const categorias = await Category.findAll();
  res.json(categorias);
};

exports.getById = async (req, res) => {
  const categoria = await Category.findByPk(req.params.id);
  if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
  res.json(categoria);
};

exports.create = async (req, res) => {
  const nueva = await Category.create(req.body);
  res.status(201).json(nueva);
};

exports.update = async (req, res) => {
  const categoria = await Category.findByPk(req.params.id);
  if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
  await categoria.update(req.body);
  res.json(categoria);
};

exports.delete = async (req, res) => {
  const categoria = await Category.findByPk(req.params.id);
  if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
  await categoria.destroy();
  res.json({ message: 'Categoría eliminada' });
};
