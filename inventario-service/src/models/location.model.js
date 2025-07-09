module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'Locations',
    timestamps: false
  });

  return Location;
};