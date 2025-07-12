const { ReportResult } = require('../models');

exports.createReportResult = async ({ report_id, content }) => {
  const newReportResult = await ReportResult.create({
    report_id,
    content,
  });

  return newReportResult;
};

exports.getAllReportResults = async () => {
  return ReportResult.findAll();
};
