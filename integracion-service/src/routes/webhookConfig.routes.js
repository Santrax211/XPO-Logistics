const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const webhookConfigController = require('../controllers/webhookConfig.controller');

/**
 * @swagger
 * /api/webhook-configs:
 *   post:
 *     description: Crear una nueva configuración de webhook
 *     responses:
 *       201:
 *         description: Configuración de webhook creada con éxito
 *       500:
 *         description: Error al crear configuración de webhook
 */
router.post('/', [verifyToken, checkRoles('Administrador')], webhookConfigController.createWebhookConfig);

/**
 * @swagger
 * /api/webhook-configs:
 *   get:
 *     description: Obtener todas las configuraciones de webhook
 *     responses:
 *       200:
 *         description: Lista de configuraciones de webhook
 *       500:
 *         description: Error al obtener configuraciones de webhook
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], webhookConfigController.getAllWebhookConfigs);

module.exports = router;