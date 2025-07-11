const dispatchStatusService = require('../services/dispatchStatus.service');

exports.createDispatchStatus = async (req, res) => {
  try {
    const dispatchStatusData = req.body;
    const newDispatchStatus = await dispatchStatusService.createDispatchStatus(dispatchStatusData);
    res.status(201).json(newDispatchStatus);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el estado de despacho', error: error.message });
  }
};

exports.getAllDispatchStatuses = async (req, res) => {
  try {
    const dispatchStatuses = await dispatchStatusService.getAllDispatchStatuses();
    res.status(200).json(dispatchStatuses);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estados de despacho', error: error.message });
  }
};
