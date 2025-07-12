const periodicSummaryService = require('../services/periodicSummary.service');

exports.createPeriodicSummary = async (req, res) => {
  try {
    const { type, date, content } = req.body;
    const newPeriodicSummary = await periodicSummaryService.createPeriodicSummary({ type, date, content });
    res.status(201).json(newPeriodicSummary);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear resumen periódico', error: error.message });
  }
};

exports.getAllPeriodicSummaries = async (req, res) => {
  try {
    const periodicSummaries = await periodicSummaryService.getAllPeriodicSummaries();
    res.status(200).json(periodicSummaries);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener resúmenes periódicos', error: error.message });
  }
};
