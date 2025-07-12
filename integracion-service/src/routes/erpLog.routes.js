const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const erpLogController = require('../controllers/erpLog.controller');

/**
 * @swagger
 * /api/erp-logs:
 *   post:
 *     description: Crear un nuevo log de integración ERP
 *     responses:
 *       201:
 *         description: Log de integración ERP creado con éxito
 *       500:
 *         description: Error al crear log de integración ERP
 */
router.post('/', [verifyToken, checkRoles('Administrador')], erpLogController.createErpLog);

/**
 * @swagger
 * /api/erp-logs:
 *   get:
 *     description: Obtener todos los logs de integración ERP
 *     responses:
 *       200:
 *         description: Lista de logs de integración ERP
 *       500:
 *         description: Error al obtener logs de integración ERP
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], erpLogController.getErpLogs);

module.exports = router;
