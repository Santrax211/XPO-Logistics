module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    supplier_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Supplier',
    timestamps: false, // registren fechas automáticamente
  });

  return Supplier;
};
