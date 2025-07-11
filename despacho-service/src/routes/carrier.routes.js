const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const carrierController = require('../controllers/carrier.controller');

/**
 * @swagger
 * /api/carriers:
 *   post:
 *     description: Crear un nuevo transportista
 *     responses:
 *       201:
 *         description: Transportista creado con éxito
 *       500:
 *         description: Error al crear el transportista
 */
router.post('/', [verifyToken, checkRoles('Administrador')], carrierController.createCarrier);

/**
 * @swagger
 * /api/carriers:
 *   get:
 *     description: Obtener todos los transportistas
 *     responses:
 *       200:
 *         description: Lista de transportistas
 *       500:
 *         description: Error al obtener los transportistas
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], carrierController.getAllCarriers);

module.exports = router;