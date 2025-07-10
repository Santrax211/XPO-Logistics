const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse.controller');
const { verifyToken, checkRoles } = require('../middleware/authJwt');

/**
 * @swagger
 * tags:
 *   name: Almacenes
 *   description: Gestión de almacenes físicos
 */

/**
 * @swagger
 * /api/almacenes:
 *   get:
 *     summary: Obtener todos los almacenes
 *     tags: [Almacenes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de almacenes
 */
router.get('/', verifyToken, warehouseController.getAll);

/**
 * @swagger
 * /api/almacenes/{id}:
 *   get:
 *     summary: Obtener almacén por ID
 *     tags: [Almacenes]
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
 *         description: Almacén encontrado
 */
router.get('/:id', verifyToken, warehouseController.getById);

/**
 * @swagger
 * /api/almacenes:
 *   post:
 *     summary: Crear nuevo almacén
 *     tags: [Almacenes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, address]
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Almacén creado
 */
router.post('/', verifyToken, checkRoles(['Administrador']), warehouseController.create);

/**
 * @swagger
 * /api/almacenes/{id}:
 *   put:
 *     summary: Actualizar almacén por ID
 *     tags: [Almacenes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Almacén actualizado
 */
router.put('/:id', verifyToken, checkRoles(['Administrador']), warehouseController.update);

/**
 * @swagger
 * /api/almacenes/{id}:
 *   delete:
 *     summary: Eliminar almacén por ID
 *     tags: [Almacenes]
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
 *         description: Almacén eliminado
 */
router.delete('/:id', verifyToken, checkRoles(['Administrador']), warehouseController.delete);

module.exports = router;
