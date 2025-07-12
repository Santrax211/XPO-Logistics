module.exports = (sequelize, DataTypes) => {
  const ErpLog = sequelize.define('ErpLog', {
    log_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'ErpLog',
    timestamps: false,
  });

  return ErpLog;
};
