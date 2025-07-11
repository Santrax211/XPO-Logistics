module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'role_id',
      },
    },
  }, {
    tableName: 'UserRole',
    timestamps: false,
  });

  return UserRole;
};