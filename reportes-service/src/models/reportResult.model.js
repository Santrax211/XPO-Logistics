module.exports = (sequelize, DataTypes) => {
  const ReportResult = sequelize.define('ReportResult', {
    result_id: {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'ReportResult',
    timestamps: false,
  });

  return ReportResult;
};