module.exports = (sequelize, DataTypes) => {
  const IngressValidation = sequelize.define('IngressValidation', {
    validation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ingress_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ingress',
        key: 'ingress_id',
      },
    },
    validated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('APPROVED', 'REJECTED'),
      allowNull: false,
    },
    observation: {
      type: DataTypes.TEXT,
    },
    validation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'IngressValidation',
    timestamps: false,
  });

  IngressValidation.associate = (models) => {
    IngressValidation.belongsTo(models.Ingress, {
      foreignKey: 'ingress_id',
      as: 'ingress',
    });
  };

  return IngressValidation;
};
