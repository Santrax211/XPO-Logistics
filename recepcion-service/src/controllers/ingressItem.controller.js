const { models } = require('../models');

exports.createIngressItem = async (req, res) => {
  const { ingress_id, product_id, quantity } = req.body;
  try {
    const ingressItem = await models.IngressItem.create({
      ingress_id,
      product_id,
      quantity,
    });
    res.status(201).json(ingressItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear ítem de entrada', error });
  }
};

exports.getIngressItems = async (req, res) => {
  const { ingress_id } = req.params;
  try {
    const items = await models.IngressItem.findAll({
      where: { ingress_id },
    });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener ítems de entrada', error });
  }
};