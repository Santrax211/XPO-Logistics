const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');
const { verifyToken, checkRole } = require('../middleware/authJwt');

/**
 * @swagger
 * tags:
 *   name: Transacciones
 *   description: Registro de entradas y salidas de stock
 */

router.get('/', verifyToken, transactionController.getAll);
router.get('/:id', verifyToken, transactionController.getById);
router.post('/', verifyToken, checkRole('Operador'), transactionController.create);

module.exports = router;
