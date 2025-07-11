const { models } = require('../models');

exports.createIngress = async (req, res) => {
  const { supplier_id, reference, status } = req.body;
  try {
    const ingress = await models.Ingress.create({
      supplier_id,
      reference,
      status,
    });
    res.status(201).json(ingress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear entrada', error });
  }
};

exports.getAllIngress = async (req, res) => {
  try {
    const ingress = await models.Ingress.findAll({
      include: [{ model: models.Supplier, as: 'supplier' }],
    });
    res.status(200).json(ingress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener entradas', error });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const ingress = await models.Ingress.findByPk(id);
    if (!ingress) {
      return res.status(404).json({ message: 'Entrada no encontrada' });
    }
    ingress.status = status;
    await ingress.save();
    res.status(200).json(ingress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el estado de la entrada', error });
  }
};