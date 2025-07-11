const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const dispatchOrderController = require('../controllers/dispatchOrder.controller');

/**
 * @swagger
 * /api/dispatch-orders:
 *   post:
 *     description: Crear una nueva orden de despacho
 *     responses:
 *       201:
 *         description: Orden de despacho creada con éxito
 *       500:
 *         description: Error al crear la orden de despacho
 */
router.post('/', [verifyToken, checkRoles('Administrador')], dispatchOrderController.createDispatchOrder);

/**
 * @swagger
 * /api/dispatch-orders:
 *   get:
 *     description: Obtener todas las órdenes de despacho
 *     responses:
 *       200:
 *         description: Lista de órdenes de despacho
 *       500:
 *         description: Error al obtener las órdenes de despacho
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], dispatchOrderController.getAllDispatchOrders);

module.exports = router;