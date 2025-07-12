const { PeriodicSummary } = require('../models');

exports.createPeriodicSummary = async ({ type, date, content }) => {
  const newPeriodicSummary = await PeriodicSummary.create({
    type,
    date,
    content,
  });

  return newPeriodicSummary;
};

exports.getAllPeriodicSummaries = async () => {
  return PeriodicSummary.findAll();
};