const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
  }
);

// Modelos principales
const Product = require('./product.model')(sequelize, DataTypes);
const Category = require('./category.model')(sequelize, DataTypes);
const Warehouse = require('./warehouse.model')(sequelize, DataTypes);
const Location = require('./location.model')(sequelize, DataTypes);
const Stock = require('./stock.model')(sequelize, DataTypes);
const Movement = require('./movement.model')(sequelize, DataTypes);
const StockHistory = require('./stockHistory.model')(sequelize, DataTypes);

// Seguridad y usuarios
const Users = require('./users.model')(sequelize, DataTypes);
const Roles = require('./userRole.model')(sequelize, DataTypes);
const UserRole = require('./userRole.model')(sequelize, DataTypes);

// Relaciones principales
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Warehouse.hasMany(Location, { foreignKey: 'warehouse_id' });
Location.belongsTo(Warehouse, { foreignKey: 'warehouse_id' });

Product.hasMany(Stock, { foreignKey: 'product_id' });
Location.hasMany(Stock, { foreignKey: 'location_id' });
Stock.belongsTo(Product, { foreignKey: 'product_id' });
Stock.belongsTo(Location, { foreignKey: 'location_id' });

Product.hasMany(Movement, { foreignKey: 'product_id' });
Location.hasMany(Movement, { foreignKey: 'location_id' });
Movement.belongsTo(Product, { foreignKey: 'product_id' });
Movement.belongsTo(Location, { foreignKey: 'location_id' });
Movement.belongsTo(Users, { foreignKey: 'performed_by' });

Product.hasMany(StockHistory, { foreignKey: 'product_id' });
Location.hasMany(StockHistory, { foreignKey: 'location_id' });
StockHistory.belongsTo(Product, { foreignKey: 'product_id' });
StockHistory.belongsTo(Location, { foreignKey: 'location_id' });

// Relaciones de usuario y rol
Users.belongsToMany(Roles, { through: UserRole, foreignKey: 'user_id' });
Roles.belongsToMany(Users, { through: UserRole, foreignKey: 'role_id' });

module.exports = {
  sequelize,
  Product,
  Category,
  Warehouse,
  Location,
  Stock,
  Movement,
  StockHistory,
  Users,
  Roles,
  UserRole
};