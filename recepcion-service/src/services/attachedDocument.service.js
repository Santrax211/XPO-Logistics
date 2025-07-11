const { models } = require('../models');

/**
 * @param {Object} documentData
 * @returns {Object}
 */
exports.createAttachedDocument = async (documentData) => {
  try {
    const { ingress_id, document_type, url } = documentData;

    const ingress = await models.Ingress.findByPk(ingress_id);
    if (!ingress) {
      throw new Error('Entrada no encontrada');
    }

    const document = await models.AttachedDocument.create({
      ingress_id,
      document_type,
      url,
    });

    return document;
  } catch (error) {
    throw new Error('Error al crear documento adjunto: ' + error.message);
  }
};

/**
 * @param {number} ingress_id
 * @returns {Array}
 */
exports.getAttachedDocuments = async (ingress_id) => {
  try {
    const documents = await models.AttachedDocument.findAll({
      where: { ingress_id },
    });

    return documents;
  } catch (error) {
    throw new Error('Error al obtener los documentos adjuntos: ' + error.message);
  }
};

/**
 * @param {number} document_id 
 * @returns {Object} 
 */
exports.getAttachedDocumentById = async (document_id) => {
  try {
    const document = await models.AttachedDocument.findByPk(document_id);
    if (!document) {
      throw new Error('Documento adjunto no encontrado');
    }

    return document;
  } catch (error) {
    throw new Error('Error al obtener el documento adjunto: ' + error.message);
  }
};

/**
 * @param {number} document_id
 * @returns {Object}
 */
exports.deleteAttachedDocument = async (document_id) => {
  try {
    const document = await models.AttachedDocument.findByPk(document_id);
    if (!document) {
      throw new Error('Documento adjunto no encontrado');
    }

    await document.destroy();
    return { message: 'Documento adjunto eliminado con éxito' };
  } catch (error) {
    throw new Error('Error al eliminar el documento adjunto: ' + error.message);
  }
};