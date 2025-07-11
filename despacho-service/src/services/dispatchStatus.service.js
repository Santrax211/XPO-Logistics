const { DispatchStatus } = require('../models');

/**
 * @param {Object} dispatchStatusData 
 * @returns {Object}
 */
exports.createDispatchStatus = async (dispatchStatusData) => {
  const { dispatch_id, status } = dispatchStatusData;

  const newDispatchStatus = await DispatchStatus.create({
    dispatch_id,
    status,
  });

  return newDispatchStatus;
};

/**
 * @returns {Array}
 */
exports.getAllDispatchStatuses = async () => {
  return DispatchStatus.findAll();
};
