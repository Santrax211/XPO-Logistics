const { models } = require('../models');

exports.createAttachedDocument = async (req, res) => {
  const { ingress_id, document_type, url } = req.body;
  try {
    const document = await models.AttachedDocument.create({
      ingress_id,
      document_type,
      url,
    });
    res.status(201).json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear documento adjunto', error });
  }
};

exports.getAttachedDocuments = async (req, res) => {
  const { ingress_id } = req.params;
  try {
    const documents = await models.AttachedDocument.findAll({
      where: { ingress_id },
    });
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener documentos adjuntos', error });
  }
};