const { models } = require('../models');

/**
 * @param {Object} ingressData
 * @returns {Object}
 */
exports.createIngress = async (ingressData) => {
  try {
    const { supplier_id, reference, status } = ingressData;

    const supplier = await models.Supplier.findByPk(supplier_id);
    if (!supplier) {
      throw new Error('Proveedor no encontrado');
    }

    const ingress = await models.Ingress.create({
      supplier_id,
      reference,
      status,
    });

    return ingress;
  } catch (error) {
    throw new Error('Error al crear la entrada: ' + error.message);
  }
};

/**
 * @returns {Array}
 */
exports.getAllIngresses = async () => {
  try {
    const ingressList = await models.Ingress.findAll({
      include: [{ model: models.Supplier, as: 'supplier' }],
    });
    return ingressList;
  } catch (error) {
    throw new Error('Error al obtener las entradas: ' + error.message);
  }
};

/**
 * @param {number} ingress_id 
 * @param {string} status
 * @returns {Object} 
 */
exports.updateIngressStatus = async (ingress_id, status) => {
  try {
    const ingress = await models.Ingress.findByPk(ingress_id);

    if (!ingress) {
      throw new Error('Entrada no encontrada');
    }

    ingress.status = status;
    await ingress.save();

    return ingress;
  } catch (error) {
    throw new Error('Error al actualizar el estado de la entrada: ' + error.message);
  }
};
