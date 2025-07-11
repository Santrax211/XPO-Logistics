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

const Users = require('./users.model')(sequelize, DataTypes);
const Roles = require('./roles.model')(sequelize, DataTypes);
const UserRole = require('./userRole.model')(sequelize, DataTypes);
const AuditLog = require('./auditLog.model')(sequelize, DataTypes);

Users.belongsToMany(Roles, { through: UserRole, foreignKey: 'user_id' });
Roles.belongsToMany(Users, { through: UserRole, foreignKey: 'role_id' });

module.exports = {
  sequelize,
  Users,
  Roles,
  UserRole,
  AuditLog,
};