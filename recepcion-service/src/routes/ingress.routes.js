const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const ingressController = require('../controllers/ingress.controller');

/**
 * @swagger
 * /api/ingresses:
 *   get:
 *     description: Obtener todas las entradas
 *     responses:
 *       200:
 *         description: Lista de entradas
 *       500:
 *         description: Error al obtener entradas
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], ingressController.getAllIngress);

/**
 * @swagger
 * /api/ingresses:
 *   post:
 *     description: Crear una nueva entrada
 *     parameters:
 *       - name: supplier_id
 *         in: body
 *         description: ID del proveedor
 *         required: true
 *         schema:
 *           type: integer
 *       - name: reference
 *         in: body
 *         description: Referencia de la entrada
 *         required: true
 *         schema:
 *           type: string
 *       - name: status
 *         in: body
 *         description: Estado de la entrada (PENDING, COMPLETED)
 *         required: true
 *         schema:
 *           type: string
 *           enum: [PENDING, COMPLETED]
 *     responses:
 *       201:
 *         description: Entrada creada con éxito
 *       500:
 *         description: Error al crear entrada
 */
router.post('/', [verifyToken, checkRoles('Administrador')], ingressController.createIngress);

/**
 * @swagger
 * /api/ingresses/{id}/status:
 *   patch:
 *     description: Actualizar el estado de una entrada
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la entrada
 *         required: true
 *         type: integer
 *       - name: status
 *         in: body
 *         description: Estado de la entrada (PENDING, COMPLETED)
 *         required: true
 *         schema:
 *           type: string
 *           enum: [PENDING, COMPLETED]
 *     responses:
 *       200:
 *         description: Estado de la entrada actualizado
 *       404:
 *         description: Entrada no encontrada
 *       500:
 *         description: Error al actualizar estado
 */
router.patch('/:id/status', [verifyToken, checkRoles('Administrador')], ingressController.updateStatus);

module.exports = router;