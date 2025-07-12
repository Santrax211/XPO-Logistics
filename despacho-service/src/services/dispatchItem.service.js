const { DispatchItem } = require('../models');

/**
 * @param {Object} dispatchItemData
 * @returns {Object}
 */
exports.createDispatchItem = async (dispatchItemData) => {
  const { dispatch_id, product_id, quantity } = dispatchItemData;

  const newDispatchItem = await DispatchItem.create({
    dispatch_id,
    product_id,
    quantity,
  });

  return newDispatchItem;
};

/**
 * @returns {Array}
 */
exports.getAllDispatchItems = async () => {
  return DispatchItem.findAll();
};

/**
 * @param {number} itemId
 * @returns {Object}
 */
exports.getDispatchItemById = async (itemId) => {
  return DispatchItem.findByPk(itemId);
};

/**
 * @param {number} itemId 
 * @param {Object} updatedData 
 * @returns {Object}
 */
exports.updateDispatchItem = async (itemId, updatedData) => {
  const dispatchItem = await DispatchItem.findByPk(itemId);

  if (!dispatchItem) {
    throw new Error('Ítem de despacho no encontrado');
  }

  await dispatchItem.update(updatedData);

  return dispatchItem;
};

/**
 * @param {number} dispatchId
 * @returns {Array}
 */
exports.getDispatchItemsByOrder = async (dispatchId) => {
  return DispatchItem.findAll({
    where: {
      dispatch_id: dispatchId
    }
  });
};