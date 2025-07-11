const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const roleController = require('../controllers/role.controller');

/**
 * @swagger
 * /api/roles:
 *   post:
 *     description: Crear un nuevo rol
 *     responses:
 *       201:
 *         description: Rol creado con éxito
 *       500:
 *         description: Error al crear rol
 */
router.post('/', [verifyToken, checkRoles('Administrador')], roleController.createRole);

/**
 * @swagger
 * /api/roles:
 *   get:
 *     description: Obtener todos los roles
 *     responses:
 *       200:
 *         description: Lista de roles
 *       500:
 *         description: Error al obtener roles
 */
router.get('/', [verifyToken, checkRoles('Administrador')], roleController.getAllRoles);

module.exports = router;
