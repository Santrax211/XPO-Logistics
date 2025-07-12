const erpLogService = require('../services/erpLog.service');

exports.createErpLog = async (req, res) => {
  try {
    const { event_type, result, detail } = req.body;
    const log = await erpLogService.createErpLog({ event_type, result, detail });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear log de integración ERP', error: error.message });
  }
};

exports.getErpLogs = async (req, res) => {
  try {
    const logs = await erpLogService.getErpLogs();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener logs de integración ERP', error: error.message });
  }
};
