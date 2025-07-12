const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const externalTransactionController = require('../controllers/externalTransaction.controller');

/**
 * @swagger
 * /api/external-transactions:
 *   post:
 *     description: Crear una nueva transacción externa
 *     responses:
 *       201:
 *         description: Transacción externa creada con éxito
 *       500:
 *         description: Error al crear transacción externa
 */
router.post('/', [verifyToken, checkRoles('Administrador')], externalTransactionController.createExternalTransaction);

/**
 * @swagger
 * /api/external-transactions:
 *   get:
 *     description: Obtener todas las transacciones externas
 *     responses:
 *       200:
 *         description: Lista de transacciones externas
 *       500:
 *         description: Error al obtener transacciones externas
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], externalTransactionController.getAllExternalTransactions);

module.exports = router;