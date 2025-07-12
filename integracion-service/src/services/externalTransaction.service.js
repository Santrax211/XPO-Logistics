const { ExternalTransaction } = require('../models');

exports.createExternalTransaction = async ({ source, target, payload }) => {
  const newTransaction = await ExternalTransaction.create({
    source,
    target,
    payload,
  });

  return newTransaction;
};

exports.getAllExternalTransactions = async () => {
  return ExternalTransaction.findAll();
};
