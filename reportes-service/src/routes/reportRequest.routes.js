const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const reportRequestController = require('../controllers/reportRequest.controller');

/**
 * @swagger
 * /api/report-requests:
 *   post:
 *     description: Crear una solicitud de reporte
 *     responses:
 *       201:
 *         description: Solicitud de reporte creada con éxito
 *       500:
 *         description: Error al crear solicitud de reporte
 */
router.post('/', [verifyToken, checkRoles('Administrador')], reportRequestController.createReportRequest);

/**
 * @swagger
 * /api/report-requests:
 *   get:
 *     description: Obtener todas las solicitudes de reporte
 *     responses:
 *       200:
 *         description: Lista de solicitudes de reporte
 *       500:
 *         description: Error al obtener solicitudes de reporte
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], reportRequestController.getReportRequests);

module.exports = router;
