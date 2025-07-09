const { Stock } = require('../models');

exports.getAll = async (req, res) => {
  const stock = await Stock.findAll();
  res.json(stock);
};

exports.getById = async (req, res) => {
  const item = await Stock.findByPk(req.params.id);
  if (!item) return res.status(404).json({ message: 'Stock no encontrado' });
  res.json(item);
};

exports.create = async (req, res) => {
  const nuevo = await Stock.create(req.body);
  res.status(201).json(nuevo);
};

exports.update = async (req, res) => {
  const actualizado = await Stock.update(req.body, { where: { stock_id: req.params.id } });
  res.json({ message: 'Stock actualizado', actualizado });
};

exports.delete = async (req, res) => {
  await Stock.destroy({ where: { stock_id: req.params.id } });
  res.json({ message: 'Stock eliminado' });
};
