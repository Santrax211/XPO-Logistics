const { Product } = require('../models');

exports.getAll = async (req, res) => {
  const productos = await Product.findAll();
  res.json(productos);
};

exports.getById = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(producto);
};

exports.create = async (req, res) => {
  const producto = await Product.create(req.body);
  res.status(201).json(producto);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const actualizado = await Product.update(req.body, { where: { product_id: id } });
  res.json({ message: 'Producto actualizado', actualizado });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { product_id: id } });
  res.json({ message: 'Producto eliminado' });
};
