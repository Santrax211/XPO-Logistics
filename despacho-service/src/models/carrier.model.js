module.exports = (sequelize, DataTypes) => {
  const Carrier = sequelize.define('Carrier', {
    carrier_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ruc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Carrier',
    timestamps: false,
  });

  return Carrier;
};