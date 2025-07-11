module.exports = (sequelize, DataTypes) => {
  const DispatchStatus = sequelize.define('DispatchStatus', {
    status_id: {
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
    status: {
      type: DataTypes.ENUM('CREATED', 'IN_TRANSIT', 'DELIVERED'),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'DispatchStatus',
    timestamps: false,
  });

  return DispatchStatus;
};