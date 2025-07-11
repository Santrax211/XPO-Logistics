const { DispatchOrder, DispatchItem } = require('../models');

/**
 * @param {Object} dispatchOrderData
 * @returns {Object}
 */
exports.createDispatchOrder = async (dispatchOrderData) => {
  const { client_name, status } = dispatchOrderData;

  const newDispatchOrder = await DispatchOrder.create({
    client_name,
    status,
  });

  return newDispatchOrder;
};

/**
 * @returns {Array}
 */
exports.getAllDispatchOrders = async () => {
  return DispatchOrder.findAll();
};

/**
 * @param {number} dispatchId
 * @returns {Object}
 */
exports.getDispatchOrderById = async (dispatchId) => {
  return DispatchOrder.findByPk(dispatchId);
};

/**
 * @param {number} dispatchId 
 * @param {Object} updatedData 
 * @returns {Object}
 */
exports.updateDispatchOrder = async (dispatchId, updatedData) => {
  const dispatchOrder = await DispatchOrder.findByPk(dispatchId);

  if (!dispatchOrder) {
    throw new Error('Orden de despacho no encontrada');
  }

  await dispatchOrder.update(updatedData);

  return dispatchOrder;
};