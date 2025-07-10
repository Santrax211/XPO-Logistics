const { Product } = require('../models');

// Obtener todos los productos
exports.getAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener productos', error: err.message });
  }
};

// Obtener producto por ID
exports.getById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener producto', error: err.message });
  }
};

// Crear nuevo producto
exports.create = async (req, res) => {
  try {
    const { sku, name, description, unit, category_id, status } = req.body;
    const newProduct = await Product.create({ sku, name, description, unit, category_id, status });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear producto', error: err.message });
  }
};

// Actualizar producto
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, unit, category_id, status } = req.body;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.update({ name, description, unit, category_id, status });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar producto', error: err.message });
  }
};

// Eliminar producto
exports.delete = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.destroy();
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar producto', error: err.message });
  }
};