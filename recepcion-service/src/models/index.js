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

const Supplier = require('./supplier.model')(sequelize, DataTypes);
const Ingress = require('./ingress.model')(sequelize, DataTypes);
const IngressItem = require('./ingressItem.model')(sequelize, DataTypes);
const IngressValidation = require('./ingressValidation.model')(sequelize, DataTypes);
const AttachedDocument = require('./attachedDocument.model')(sequelize, DataTypes);

Supplier.hasMany(Ingress, { foreignKey: 'supplier_id' });
Ingress.belongsTo(Supplier, { foreignKey: 'supplier_id' });

Ingress.hasMany(IngressItem, { foreignKey: 'ingress_id' });
IngressItem.belongsTo(Ingress, { foreignKey: 'ingress_id' });

Ingress.hasMany(IngressValidation, { foreignKey: 'ingress_id' });
IngressValidation.belongsTo(Ingress, { foreignKey: 'ingress_id' });

Ingress.hasMany(AttachedDocument, { foreignKey: 'ingress_id' });
AttachedDocument.belongsTo(Ingress, { foreignKey: 'ingress_id' });

module.exports = {
  sequelize,
  Supplier,
  Ingress,
  IngressItem,
  IngressValidation,
  AttachedDocument
};
