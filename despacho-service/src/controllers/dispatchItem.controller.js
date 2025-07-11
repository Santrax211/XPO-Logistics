const dispatchItemService = require('../services/dispatchItem.service');

exports.createDispatchItem = async (req, res) => {
  try {
    const dispatchItemData = req.body;
    const newDispatchItem = await dispatchItemService.createDispatchItem(dispatchItemData);
    res.status(201).json(newDispatchItem);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el ítem de despacho', error: error.message });
  }
};

exports.getAllDispatchItems = async (req, res) => {
  try {
    const dispatchItems = await dispatchItemService.getAllDispatchItems();
    res.status(200).json(dispatchItems);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los ítems de despacho', error: error.message });
  }
};
