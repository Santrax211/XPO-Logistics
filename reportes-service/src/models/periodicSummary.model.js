module.exports = (sequelize, DataTypes) => {
  const PeriodicSummary = sequelize.define('PeriodicSummary', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM('DAILY', 'WEEKLY', 'MONTHLY'),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'PeriodicSummary',
    timestamps: false,
  });

  return PeriodicSummary;
};
