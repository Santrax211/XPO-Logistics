const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const dispatchStatusController = require('../controllers/dispatchStatus.controller');

/**
 * @swagger
 * /api/dispatch-status:
 *   post:
 *     description: Crear un nuevo estado de despacho
 *     responses:
 *       201:
 *         description: Estado de despacho creado con éxito
 *       500:
 *         description: Error al crear el estado de despacho
 */
router.post('/', [verifyToken, checkRoles('Administrador')], dispatchStatusController.createDispatchStatus);

/**
 * @swagger
 * /api/dispatch-status:
 *   get:
 *     description: Obtener todos los estados de despacho
 *     responses:
 *       200:
 *         description: Lista de estados de despacho
 *       500:
 *         description: Error al obtener los estados de despacho
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], dispatchStatusController.getAllDispatchStatuses);

module.exports = router;