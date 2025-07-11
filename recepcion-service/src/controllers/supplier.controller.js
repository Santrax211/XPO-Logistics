const { models } = require('../models');

exports.createSupplier = async (req, res) => {
  try {
    const { name, contact } = req.body;
    const supplier = await models.Supplier.create({ name, contact });
    res.status(201).json(supplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear proveedor', error });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await models.Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener proveedores', error });
  }
};

exports.getSupplierById = async (req, res) => {
  const { id } = req.params;
  try {
    const supplier = await models.Supplier.findByPk(id);
    if (!supplier) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.status(200).json(supplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener proveedor', error });
  }
};