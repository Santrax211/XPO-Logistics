module.exports = (sequelize, DataTypes) => {
  const DispatchItem = sequelize.define('DispatchItem', {
    item_id: {
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'DispatchItem',
    timestamps: false,
  });

  return DispatchItem;
};