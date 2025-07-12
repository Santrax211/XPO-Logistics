const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const apiProviderController = require('../controllers/apiProvider.controller');

/**
 * @swagger
 * /api/api-providers:
 *   post:
 *     description: Crear un nuevo proveedor de API
 *     responses:
 *       201:
 *         description: Proveedor de API creado con éxito
 *       500:
 *         description: Error al crear proveedor de API
 */
router.post('/', [verifyToken, checkRoles('Administrador')], apiProviderController.createApiProvider);

/**
 * @swagger
 * /api/api-providers:
 *   get:
 *     description: Obtener todos los proveedores de API
 *     responses:
 *       200:
 *         description: Lista de proveedores de API
 *       500:
 *         description: Error al obtener proveedores de API
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], apiProviderController.getAllApiProviders);

module.exports = router;