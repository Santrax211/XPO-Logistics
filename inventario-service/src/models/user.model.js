module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM(
        'SuperAdmin',
        'Administrador',
        'Operador',
        'Almacenero',
        'Auditor',
        'Recepcion',
        'Despacho',
        'Invitado'
      ),
      allowNull: false
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });

  return User;
};