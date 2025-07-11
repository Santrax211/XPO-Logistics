const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const supplierController = require('../controllers/supplier.controller');
const swaggerJsdoc = require('swagger-jsdoc');

/**
 * @swagger
 * /api/suppliers:
 *   get:
 *     description: Obtener todos los proveedores
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *       500:
 *         description: Error al obtener proveedores
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], supplierController.getAllSuppliers);

/**
 * @swagger
 * /api/suppliers:
 *   post:
 *     description: Crear un nuevo proveedor
 *     parameters:
 *       - name: name
 *         in: body
 *         description: Nombre del proveedor
 *         required: true
 *         schema:
 *           type: string
 *       - name: contact
 *         in: body
 *         description: Contacto del proveedor
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Proveedor creado con éxito
 *       500:
 *         description: Error al crear proveedor
 */
router.post('/', [verifyToken, checkRoles('Administrador')], supplierController.createSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   get:
 *     description: Obtener un proveedor por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del proveedor
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Proveedor encontrado
 *       404:
 *         description: Proveedor no encontrado
 */
router.get('/:id', [verifyToken, checkRoles('Administrador', 'Operador')], supplierController.getSupplierById);

module.exports = router;