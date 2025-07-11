module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Roles',
    timestamps: false,
  });

  return Roles;
};