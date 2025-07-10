const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { verifyToken, checkRoles } = require('../middleware/authJwt');

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Gestión de productos del inventario
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Listar todos los productos
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', verifyToken, productController.getAll);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener producto por ID
 *     tags: [Productos]
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
 *         description: Producto encontrado
 */
router.get('/:id', verifyToken, productController.getById);

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crear nuevo producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [sku, name, unit, category_id]
 *             properties:
 *               sku:
 *                 type: string
 *               name:
 *                 type: string
 *               unit:
 *                 type: string
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto creado
 */
router.post('/', verifyToken, checkRoles(['Administrador']), productController.create);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar producto por ID
 *     tags: [Productos]
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
 *               unit:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado
 */
router.put('/:id', verifyToken, checkRoles(['Administrador']), productController.update);

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar producto por ID
 *     tags: [Productos]
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
 *         description: Producto eliminado
 */
router.delete('/:id', verifyToken, checkRoles(['Administrador']), productController.delete);

module.exports = router;
