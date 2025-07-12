module.exports = (sequelize, DataTypes) => {
  const APIProvider = sequelize.define('APIProvider', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auth_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'APIProvider',
    timestamps: false,
  });

  return APIProvider;
};