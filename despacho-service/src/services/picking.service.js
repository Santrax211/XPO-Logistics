const { Picking } = require('../models');

/**
 * @param {Object} pickingData
 * @returns {Object}
 */
exports.createPicking = async (pickingData) => {
  const { dispatch_id, product_id, location_id, quantity, user_id } = pickingData;

  const newPicking = await Picking.create({
    dispatch_id,
    product_id,
    location_id,
    quantity,
    user_id,
  });

  return newPicking;
};

/**
 * @returns {Array}
 */
exports.getAllPickings = async () => {
  return Picking.findAll();
};
