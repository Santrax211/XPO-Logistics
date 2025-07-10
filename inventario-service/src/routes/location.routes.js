const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');
const { verifyToken, checkRoles } = require('../middleware/authJwt');

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Gestión de ubicaciones dentro de los almacenes
 */

/**
 * @swagger
 * /api/ubicaciones:
 *   get:
 *     summary: Listar todas las ubicaciones
 *     tags: [Ubicaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ubicaciones
 */
router.get('/', verifyToken, locationController.getAll);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   get:
 *     summary: Obtener ubicación por ID
 *     tags: [Ubicaciones]
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
 *         description: Ubicación encontrada
 */
router.get('/:id', verifyToken, locationController.getById);

/**
 * @swagger
 * /api/ubicaciones:
 *   post:
 *     summary: Crear nueva ubicación
 *     tags: [Ubicaciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [warehouse_id, code, description]
 *             properties:
 *               warehouse_id:
 *                 type: integer
 *               code:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ubicación creada
 */
router.post('/', verifyToken, checkRoles(['Administrador']), locationController.create);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   put:
 *     summary: Actualizar ubicación
 *     tags: [Ubicaciones]
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
 *               code:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ubicación actualizada
 */
router.put('/:id', verifyToken, checkRoles(['Administrador']), locationController.update);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   delete:
 *     summary: Eliminar ubicación
 *     tags: [Ubicaciones]
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
 *         description: Ubicación eliminada
 */
router.delete('/:id', verifyToken, checkRoles(['Administrador']), locationController.delete);

module.exports = router;