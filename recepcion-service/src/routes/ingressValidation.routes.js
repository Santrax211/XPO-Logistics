const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const ingressValidationController = require('../controllers/ingressValidation.controller');

/**
 * @swagger
 * /api/ingresses/{ingress_id}/validations:
 *   post:
 *     description: Crear una validación de entrada
 *     parameters:
 *       - name: ingress_id
 *         in: body
 *         description: ID de la entrada
 *         required: true
 *         schema:
 *           type: integer
 *       - name: validated_by
 *         in: body
 *         description: ID del usuario que valida
 *         required: true
 *         schema:
 *           type: integer
 *       - name: status
 *         in: body
 *         description: Estado de la validación (APPROVED, REJECTED)
 *         required: true
 *         schema:
 *           type: string
 *           enum: [APPROVED, REJECTED]
 *     responses:
 *       201:
 *         description: Validación creada con éxito
 *       500:
 *         description: Error al crear validación
 */
router.post('/:ingress_id/validations', [verifyToken, checkRoles('Administrador')], ingressValidationController.createIngressValidation);

module.exports = router;