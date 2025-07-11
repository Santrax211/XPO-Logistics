module.exports = (sequelize, DataTypes) => {
  const Picking = sequelize.define('Picking', {
    picking_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dispatch_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'DispatchOrder',
        key: 'dispatch_id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'Picking',
    timestamps: false,
  });

  return Picking;
};