const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const periodicSummaryController = require('../controllers/periodicSummary.controller');

/**
 * @swagger
 * /api/periodic-summary:
 *   post:
 *     description: Crear un nuevo resumen periódico
 *     responses:
 *       201:
 *         description: Resumen periódico creado con éxito
 *       500:
 *         description: Error al crear resumen periódico
 */
router.post('/', [verifyToken, checkRoles('Administrador')], periodicSummaryController.createPeriodicSummary);

/**
 * @swagger
 * /api/periodic-summary:
 *   get:
 *     description: Obtener todos los resúmenes periódicos
 *     responses:
 *       200:
 *         description: Lista de resúmenes periódicos
 *       500:
 *         description: Error al obtener resúmenes periódicos
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], periodicSummaryController.getAllPeriodicSummaries);

module.exports = router;
