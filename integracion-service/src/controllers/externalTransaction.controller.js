const externalTransactionService = require('../services/externalTransaction.service');

exports.createExternalTransaction = async (req, res) => {
  try {
    const { source, target, payload } = req.body;
    const transaction = await externalTransactionService.createExternalTransaction({ source, target, payload });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear transacción externa', error: error.message });
  }
};

exports.getAllExternalTransactions = async (req, res) => {
  try {
    const transactions = await externalTransactionService.getAllExternalTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener transacciones externas', error: error.message });
  }
};
