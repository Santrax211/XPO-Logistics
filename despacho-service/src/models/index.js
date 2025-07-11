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

const DispatchOrder = require('./dispatchOrder.model')(sequelize, DataTypes);
const DispatchItem = require('./dispatchItem.model')(sequelize, DataTypes);
const Picking = require('./picking.model')(sequelize, DataTypes);
const DispatchStatus = require('./dispatchStatus.model')(sequelize, DataTypes);
const Carrier = require('./carrier.model')(sequelize, DataTypes);

DispatchOrder.hasMany(DispatchItem, { foreignKey: 'dispatch_id' });
DispatchItem.belongsTo(DispatchOrder, { foreignKey: 'dispatch_id' });

DispatchOrder.hasMany(Picking, { foreignKey: 'dispatch_id' });
Picking.belongsTo(DispatchOrder, { foreignKey: 'dispatch_id' });

DispatchOrder.hasMany(DispatchStatus, { foreignKey: 'dispatch_id' });
DispatchStatus.belongsTo(DispatchOrder, { foreignKey: 'dispatch_id' });

Carrier.hasMany(DispatchOrder, { foreignKey: 'carrier_id' });
DispatchOrder.belongsTo(Carrier, { foreignKey: 'carrier_id' });

module.exports = {
  sequelize,
  DispatchOrder,
  DispatchItem,
  Picking,
  DispatchStatus,
  Carrier,
};
