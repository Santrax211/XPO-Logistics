const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     description: Iniciar sesión
 *     responses:
 *       200:
 *         description: Token JWT
 *       500:
 *         description: Error al iniciar sesión
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     description: Registrar un nuevo usuario
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito
 *       500:
 *         description: Error al registrar usuario
 */
router.post('/register', authController.register);

module.exports = router;
