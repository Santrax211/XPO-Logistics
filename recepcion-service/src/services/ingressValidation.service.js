const { models } = require('../models');

/**
 * @param {Object} validationData 
 * @returns {Object} 
 */
exports.createIngressValidation = async (validationData) => {
  try {
    const { ingress_id, validated_by, status, observation } = validationData;

    const ingress = await models.Ingress.findByPk(ingress_id);
    if (!ingress) {
      throw new Error('Entrada no encontrada');
    }

    const validation = await models.IngressValidation.create({
      ingress_id,
      validated_by,
      status,
      observation,
    });

    return validation;
  } catch (error) {
    throw new Error('Error al crear validación de entrada: ' + error.message);
  }
};

/**
 * @param {number} ingress_id 
 * @returns {Array}
 */
exports.getIngressValidations = async (ingress_id) => {
  try {
    const validations = await models.IngressValidation.findAll({
      where: { ingress_id },
    });

    return validations;
  } catch (error) {
    throw new Error('Error al obtener las validaciones de la entrada: ' + error.message);
  }
};