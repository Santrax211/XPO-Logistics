const { Movement, Product, Location } = require('../models');

// Obtener todos los movimientos
exports.getAll = async (req, res) => {
  try {
    const movimientos = await Movement.findAll({
      include: [
        { model: Product, attributes: ['sku', 'name'] },
        { model: Location, attributes: ['code', 'description'] }
      ]
    });
    res.json(movimientos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener movimientos', error: err.message });
  }
};

// Obtener movimiento por ID
exports.getById = async (req, res) => {
  try {
    const movimiento = await Movement.findByPk(req.params.id);
    if (!movimiento) return res.status(404).json({ message: 'Movimiento no encontrado' });
    res.json(movimiento);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener movimiento', error: err.message });
  }
};

// Registrar un movimiento
exports.create = async (req, res) => {
  try {
    const { product_id, location_id, type, quantity } = req.body;

    // Asegurar que esté autenticado
    if (!req.user || !req.user.user_id) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const movimiento = await Movement.create({
      product_id,
      location_id,
      type,
      quantity,
      performed_by: req.user.user_id
    });

    res.status(201).json({ message: 'Movimiento registrado', movimiento });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar movimiento', error: err.message });
  }
};