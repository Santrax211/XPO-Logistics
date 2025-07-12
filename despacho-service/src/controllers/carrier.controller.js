const carrierService = require('../services/carrier.service.js');

exports.createCarrier = async (req, res) => {
  try {
    const carrierData = req.body;
    const newCarrier = await carrierService.createCarrier(carrierData);
    res.status(201).json(newCarrier);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el transportista', error: error.message });
  }
};

exports.getAllCarriers = async (req, res) => {
  try {
    const carriers = await carrierService.getAllCarriers();
    res.status(200).json(carriers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los transportistas', error: error.message });
  }
};
