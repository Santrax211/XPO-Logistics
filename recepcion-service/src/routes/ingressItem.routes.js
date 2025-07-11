const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const ingressItemController = require('../controllers/ingressItem.controller');

/**
 * @swagger
 * /api/ingresses/{ingress_id}/items:
 *   get:
 *     description: Obtener los ítems de una entrada
 *     parameters:
 *       - name: ingress_id
 *         in: path
 *         description: ID de la entrada
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Lista de ítems de la entrada
 *       500:
 *         description: Error al obtener los ítems
 */
router.get('/:ingress_id/items', [verifyToken, checkRoles('Administrador', 'Operador')], ingressItemController.getIngressItems);

/**
 * @swagger
 * /api/ingresses/items:
 *   post:
 *     description: Crear un ítem en una entrada
 *     parameters:
 *       - name: ingress_id
 *         in: body
 *         description: ID de la entrada
 *         required: true
 *         schema:
 *           type: integer
 *       - name: product_id
 *         in: body
 *         description: ID del producto
 *         required: true
 *         schema:
 *           type: integer
 *       - name: quantity
 *         in: body
 *         description: Cantidad del producto
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Ítem de entrada creado con éxito
 *       500:
 *         description: Error al crear ítem de entrada
 */
router.post('/items', [verifyToken, checkRoles('Administrador')], ingressItemController.createIngressItem);

module.exports = router;