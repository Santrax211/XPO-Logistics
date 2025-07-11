module.exports = (sequelize, DataTypes) => {
  const DispatchOrder = sequelize.define('DispatchOrder', {
    dispatch_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('CREATED', 'IN_PROGRESS', 'SHIPPED'),
      defaultValue: 'CREATED',
    },
  }, {
    tableName: 'DispatchOrder',
    timestamps: false,
  });

  return DispatchOrder;
};