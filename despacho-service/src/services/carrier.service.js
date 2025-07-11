const { Carrier } = require('../models');

/**
 * @param {Object} carrierData
 * @returns {Object} 
 */
exports.createCarrier = async (carrierData) => {
  const { name, ruc, contact } = carrierData;

  const newCarrier = await Carrier.create({
    name,
    ruc,
    contact,
  });

  return newCarrier;
};

/**
 * @returns {Array}
 */
exports.getAllCarriers = async () => {
  return Carrier.findAll();
};
