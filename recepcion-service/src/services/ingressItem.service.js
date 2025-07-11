const { models } = require('../models');

/**
 * @param {Object} ingressItemData
 * @returns {Object}
 */
exports.createIngressItem = async (ingressItemData) => {
  try {
    const { ingress_id, product_id, quantity } = ingressItemData;

    const ingress = await models.Ingress.findByPk(ingress_id);
    if (!ingress) {
      throw new Error('Entrada no encontrada');
    }

    const ingressItem = await models.IngressItem.create({
      ingress_id,
      product_id,
      quantity,
    });

    return ingressItem;
  } catch (error) {
    throw new Error('Error al crear ítem de entrada: ' + error.message);
  }
};

/**
 * @param {number} ingress_id
 * @returns {Array}
 */
exports.getIngressItems = async (ingress_id) => {
  try {
    const ingressItems = await models.IngressItem.findAll({
      where: { ingress_id },
    });

    return ingressItems;
  } catch (error) {
    throw new Error('Error al obtener los ítems de la entrada: ' + error.message);
  }
};
