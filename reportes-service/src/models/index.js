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

const ReportRequest = require('./reportRequest.model')(sequelize, DataTypes);
const ReportResult = require('./reportResult.model')(sequelize, DataTypes);
const ReportConfig = require('./reportConfig.model')(sequelize, DataTypes);
const PeriodicSummary = require('./periodicSummary.model')(sequelize, DataTypes);

ReportRequest.hasMany(ReportResult, { foreignKey: 'report_id' });
ReportResult.belongsTo(ReportRequest, { foreignKey: 'report_id' });

ReportRequest.hasMany(ReportConfig, { foreignKey: 'report_id' });
ReportConfig.belongsTo(ReportRequest, { foreignKey: 'report_id' });

module.exports = {
  sequelize,
  ReportRequest,
  ReportResult,
  ReportConfig,
  PeriodicSummary
};