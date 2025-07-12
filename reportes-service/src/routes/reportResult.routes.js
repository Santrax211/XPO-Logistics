const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const reportResultController = require('../controllers/reportResult.controller');

/**
 * @swagger
 * /api/report-results:
 *   post:
 *     description: Crear un nuevo resultado de reporte
 *     responses:
 *       201:
 *         description: Resultado de reporte creado con éxito
 *       500:
 *         description: Error al crear resultado de reporte
 */
router.post('/', [verifyToken, checkRoles('Administrador')], reportResultController.createReportResult);

/**
 * @swagger
 * /api/report-results:
 *   get:
 *     description: Obtener todos los resultados de reportes
 *     responses:
 *       200:
 *         description: Lista de resultados de reportes
 *       500:
 *         description: Error al obtener resultados de reportes
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], reportResultController.getAllReportResults);

module.exports = router;
