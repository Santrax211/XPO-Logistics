const reportRequestService = require('../services/reportRequest.service');

exports.createReportRequest = async (req, res) => {
  try {
    const { type, requested_by, filters } = req.body;
    const reportRequest = await reportRequestService.createReportRequest({ type, requested_by, filters });
    res.status(201).json(reportRequest);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear solicitud de reporte', error: error.message });
  }
};

exports.getReportRequests = async (req, res) => {
  try {
    const reportRequests = await reportRequestService.getReportRequests();
    res.status(200).json(reportRequests);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener solicitudes de reporte', error: error.message });
  }
};
