module.exports = (sequelize, DataTypes) => {
  const ReportConfig = sequelize.define('ReportConfig', {
    config_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    report_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ReportRequest',
        key: 'report_id',
      },
    },
    filters: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  }, {
    tableName: 'ReportConfig',
    timestamps: false,
  });

  return ReportConfig;
};