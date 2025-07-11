const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const attachedDocumentController = require('../controllers/attachedDocument.controller');

/**
 * @swagger
 * /api/ingresses/{ingress_id}/documents:
 *   post:
 *     description: Crear un documento adjunto a una entrada
 *     parameters:
 *       - name: ingress_id
 *         in: body
 *         description: ID de la entrada
 *         required: true
 *         schema:
 *           type: integer
 *       - name: document_type
 *         in: body
 *         description: Tipo de documento
 *         required: true
 *         schema:
 *           type: string
 *       - name: url
 *         in: body
 *         description: URL del documento adjunto
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Documento adjunto creado con éxito
 *       500:
 *         description: Error al crear documento adjunto
 */
router.post('/:ingress_id/documents', [verifyToken, checkRoles('Administrador')], attachedDocumentController.createAttachedDocument);

module.exports = router;