const reportResultService = require('../services/reportResult.service');

exports.createReportResult = async (req, res) => {
  try {
    const { report_id, content } = req.body;
    const newReportResult = await reportResultService.createReportResult({ report_id, content });
    res.status(201).json(newReportResult);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear resultado de reporte', error: error.message });
  }
};

exports.getAllReportResults = async (req, res) => {
  try {
    const reportResults = await reportResultService.getAllReportResults();
    res.status(200).json(reportResults);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener resultados de reportes', error: error.message });
  }
};
