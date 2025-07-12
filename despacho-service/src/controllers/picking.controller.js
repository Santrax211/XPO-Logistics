const pickingService = require('../services/picking.service.js');

exports.createPicking = async (req, res) => {
  try {
    const pickingData = req.body;
    const newPicking = await pickingService.createPicking(pickingData);
    res.status(201).json(newPicking);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el picking', error: error.message });
  }
};

exports.getAllPickings = async (req, res) => {
  try {
    const pickings = await pickingService.getAllPickings();
    res.status(200).json(pickings);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pickings', error: error.message });
  }
};
