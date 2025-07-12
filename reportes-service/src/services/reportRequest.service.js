const { ReportRequest, ReportConfig } = require('../models');

exports.createReportRequest = async ({ type, requested_by, filters }) => {
  const newReportRequest = await ReportRequest.create({
    type,
    requested_by,
    status: 'PENDING',
  });

  await ReportConfig.create({
    report_id: newReportRequest.report_id,
    filters,
  });

  return newReportRequest;
};

exports.getReportRequests = async () => {
  return ReportRequest.findAll({
    include: [{ model: ReportConfig, as: 'config' }],
  });
};