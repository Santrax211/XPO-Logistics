module.exports = (sequelize, DataTypes) => {
  const ReportRequest = sequelize.define('ReportRequest', {
    report_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM('ROTATION', 'STOCK', 'MOVEMENTS'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'GENERATED'),
      defaultValue: 'PENDING',
    },
    generated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    requested_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'ReportRequest',
    timestamps: false,
  });

  return ReportRequest;
};