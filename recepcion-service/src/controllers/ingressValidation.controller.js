const { models } = require('../models');

exports.createIngressValidation = async (req, res) => {
  const { ingress_id, validated_by, status, observation } = req.body;
  try {
    const validation = await models.IngressValidation.create({
      ingress_id,
      validated_by,
      status,
      observation,
    });
    res.status(201).json(validation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear validación de entrada', error });
  }
};

exports.getIngressValidations = async (req, res) => {
  const { ingress_id } = req.params;
  try {
    const validations = await models.IngressValidation.findAll({
      where: { ingress_id },
    });
    res.status(200).json(validations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener validaciones de entrada', error });
  }
};