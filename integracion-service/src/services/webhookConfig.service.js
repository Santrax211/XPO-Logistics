const { WebhookConfig } = require('../models');

exports.createWebhookConfig = async ({ name, url, event_trigger, active }) => {
  const newWebhookConfig = await WebhookConfig.create({
    name,
    url,
    event_trigger,
    active,
  });

  return newWebhookConfig;
};

exports.getAllWebhookConfigs = async () => {
  return WebhookConfig.findAll();
};