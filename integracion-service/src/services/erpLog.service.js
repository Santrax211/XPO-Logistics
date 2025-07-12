const { ErpLog } = require('../models');

exports.createErpLog = async ({ event_type, result, detail }) => {
  const newLog = await ErpLog.create({
    event_type,
    result,
    detail,
  });
  return newLog;
};

exports.getErpLogs = async () => {
  return ErpLog.findAll();
};
