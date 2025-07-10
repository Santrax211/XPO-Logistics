const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movement.controller');
const { verifyToken, checkRoles } = require('../middleware/authJwt');

/**
 * @swagger
 * tags:
 *   name: Movimientos
 *   description: Registro de entradas, salidas y ajustes de inventario
 */

/**
 * @swagger
 * /api/movimientos:
 *   get:
 *     summary: Obtener todos los movimientos
 *     tags: [Movimientos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de movimientos
 */
router.get('/', verifyToken, movementController.getAll);

/**
 * @swagger
 * /api/movimientos/{id}:
 *   get:
 *     summary: Obtener un movimiento por ID
 *     tags: [Movimientos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle del movimiento
 */
router.get('/:id', verifyToken, movementController.getById);

/**
 * @swagger
 * /api/movimientos:
 *   post:
 *     summary: Registrar nuevo movimiento de inventario
 *     tags: [Movimientos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [product_id, location_id, type, quantity]
 *             properties:
 *               product_id:
 *                 type: integer
 *               location_id:
 *                 type: integer
 *               type:
 *                 type: string
 *                 enum: [IN, OUT, ADJUST]
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Movimiento registrado correctamente
 */
router.post(
  '/',
  verifyToken,
  checkRoles(['Operador', 'Almacenero', 'Administrador']),
  movementController.create
);

module.exports = router;