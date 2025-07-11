module.exports = (sequelize, DataTypes) => {
  const AttachedDocument = sequelize.define('AttachedDocument', {
    id: {
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
    document_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    upload_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'AttachedDocument',
    timestamps: false,
  });

  AttachedDocument.associate = (models) => {
    AttachedDocument.belongsTo(models.Ingress, {
      foreignKey: 'ingress_id',
      as: 'ingress',
    });
  };

  return AttachedDocument;
};
