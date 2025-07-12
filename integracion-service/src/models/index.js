const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,        
  process.env.DB_USER,        
  process.env.DB_PASSWORD,    
  {
    host: process.env.DB_HOST, 
    dialect: 'mysql',     
    port: process.env.DB_PORT || 3306,
  }
);

const ErpLog = require('./erpLog.model')(sequelize, DataTypes);
const ExternalTransaction = require('./externalTransaction.model')(sequelize, DataTypes);
const APIProvider = require('./apiProvider.model')(sequelize, DataTypes);
const WebhookConfig = require('./webhookConfig.model')(sequelize, DataTypes);

ErpLog.hasMany(ExternalTransaction, { foreignKey: 'log_id' });
ExternalTransaction.belongsTo(ErpLog, { foreignKey: 'log_id' });

APIProvider.hasMany(ExternalTransaction, { foreignKey: 'api_provider_id' });
ExternalTransaction.belongsTo(APIProvider, { foreignKey: 'api_provider_id' });

WebhookConfig.hasMany(ExternalTransaction, { foreignKey: 'webhook_id' });
ExternalTransaction.belongsTo(WebhookConfig, { foreignKey: 'webhook_id' });

module.exports = {
  sequelize,
  ErpLog,
  ExternalTransaction,
  APIProvider,
  WebhookConfig,
};