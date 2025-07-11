const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * /api/users:
 *   post:
 *     description: Crear un nuevo usuario
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *       500:
 *         description: Error al crear usuario
 */
router.post('/', [verifyToken, checkRoles('Administrador')], userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       500:
 *         description: Error al obtener usuarios
 */
router.get('/', [verifyToken, checkRoles('Administrador')], userController.getAllUsers);

module.exports = router;
