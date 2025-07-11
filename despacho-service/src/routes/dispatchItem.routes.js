const express = require('express');
const router = express.Router();
const { verifyToken, checkRoles } = require('../middleware/authJwt');
const dispatchItemController = require('../controllers/dispatchItem.controller');

// Documentar la ruta en Swagger
/**
 * @swagger
 * /api/dispatch-items:
 *   post:
 *     description: Crear un nuevo ítem de despacho
 *     responses:
 *       201:
 *         description: Ítem de despacho creado con éxito
 *       500:
 *         description: Error al crear el ítem de despacho
 */
router.post('/', [verifyToken, checkRoles('Administrador')], dispatchItemController.createDispatchItem);

/**
 * @swagger
 * /api/dispatch-items:
 *   get:
 *     description: Obtener todos los ítems de despacho
 *     responses:
 *       200:
 *         description: Lista de ítems de despacho
 *       500:
 *         description: Error al obtener los ítems de despacho
 */
router.get('/', [verifyToken, checkRoles('Administrador', 'Operador')], dispatchItemController.getAllDispatchItems);

module.exports = router;