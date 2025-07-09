const { Transaction } = require('../models');

exports.getAll = async (req, res) => {
  const transacciones = await Transaction.findAll();
  res.json(transacciones);
};

exports.getById = async (req, res) => {
  const trans = await Transaction.findByPk(req.params.id);
  if (!trans) return res.status(404).json({ message: 'Transacción no encontrada' });
  res.json(trans);
};

exports.create = async (req, res) => {
  const nueva = await Transaction.create(req.body);
  res.status(201).json(nueva);
};
