module.exports = (sequelize, DataTypes) => {
  const IngressItem = sequelize.define('IngressItem', {
    item_id: {
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'IngressItem',
    timestamps: false,
  });

  IngressItem.associate = (models) => {
    IngressItem.belongsTo(models.Ingress, {
      foreignKey: 'ingress_id',
      as: 'ingress',
    });
  };

  return IngressItem;
};