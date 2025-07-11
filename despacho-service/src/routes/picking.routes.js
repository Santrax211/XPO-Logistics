const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const pickingController = require('../controllers/picking.controller');

/**
 * @swagger
 * /api/picking:
 *   post:
 *     description: Crear un nuevo picking
 *     responses:
 *       201:
 *         description: Picking creado con éxito
 *       500:
 *         description: Error al crear el picking
 */
router.post('/', [verifyToken, checkRoles('Administrador')], pickingController.createPicking);

/**
 * @swagger
 * /api/picking:
 *   get:
 *     description: Obtener todos los pickings
 *     responses:
 *       200:
 *         description: Lista de pickings
 *       500:
 *         description: Error al obtener los pickings
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], pickingController.getAllPickings);

module.exports = router;