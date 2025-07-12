const webhookConfigService = require('../services/webhookConfig.service');

exports.createWebhookConfig = async (req, res) => {
  try {
    const { name, url, event_trigger, active } = req.body;
    const newWebhookConfig = await webhookConfigService.createWebhookConfig({ name, url, event_trigger, active });
    res.status(201).json(newWebhookConfig);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear configuración de webhook', error: error.message });
  }
};

exports.getAllWebhookConfigs = async (req, res) => {
  try {
    const webhookConfigs = await webhookConfigService.getAllWebhookConfigs();
    res.status(200).json(webhookConfigs);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener configuraciones de webhook', error: error.message });
  }
};
