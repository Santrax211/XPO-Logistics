const dispatchOrderService = require('../services/dispatchOrder.service.js');

exports.createDispatchOrder = async (req, res) => {
  try {
    const dispatchOrderData = req.body;
    const newDispatchOrder = await dispatchOrderService.createDispatchOrder(dispatchOrderData);
    res.status(201).json(newDispatchOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden de despacho', error: error.message });
  }
};

exports.getAllDispatchOrders = async (req, res) => {
  try {
    const dispatchOrders = await dispatchOrderService.getAllDispatchOrders();
    res.status(200).json(dispatchOrders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes de despacho', error: error.message });
  }
};

exports.getDispatchOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const dispatchOrder = await dispatchOrderService.getDispatchOrderById(id);
    res.status(200).json(dispatchOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la orden de despacho', error: error.message });
  }
};

exports.updateDispatchOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedDispatchOrder = await dispatchOrderService.updateDispatchOrder(id, updatedData);
    res.status(200).json(updatedDispatchOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la orden de despacho', error: error.message });
  }
};
