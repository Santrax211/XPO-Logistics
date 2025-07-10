module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'Roles',
    timestamps: false
  });

  return Roles;
};
