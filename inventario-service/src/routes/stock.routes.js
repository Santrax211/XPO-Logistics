const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock.controller');
const { verifyToken, checkRole } = require('../middleware/authJwt');

/**
 * @swagger
 * tags:
 *   name: Stock
 *   description: Gestión de existencias por producto y ubicación
 */

router.get('/', verifyToken, stockController.getAll);
router.get('/:id', verifyToken, stockController.getById);
router.post('/', verifyToken, checkRole('Administrador'), stockController.create);
router.put('/:id', verifyToken, checkRole('Administrador'), stockController.update);
router.delete('/:id', verifyToken, checkRole('Administrador'), stockController.delete);

module.exports = router;