module.exports = (sequelize, DataTypes) => {
  const Ingress = sequelize.define('Ingress', {
    ingress_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Supplier',
        key: 'supplier_id',
      },
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'COMPLETED'),
      defaultValue: 'PENDING',
    },
  }, {
    tableName: 'Ingress',
    timestamps: false,
  });

  Ingress.associate = (models) => {
    Ingress.belongsTo(models.Supplier, {
      foreignKey: 'supplier_id',
      as: 'supplier',
    });
  };

  return Ingress;
};
