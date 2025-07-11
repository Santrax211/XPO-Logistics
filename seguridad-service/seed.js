const { sequelize, Users, Roles, UserRole } = require('./models');
const bcrypt = require('bcryptjs');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });

    const adminRole = await Roles.create({ name: 'Administrador' });
    const operatorRole = await Roles.create({ name: 'Operador' });
    
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await Users.create({
      username: 'admin',
      email: 'admin@empresa.com',
      password: hashedPassword,
    });

    await UserRole.create({
      user_id: user.user_id,
      role_id: adminRole.role_id,
    });

    console.log('Datos iniciales insertados con éxito');
    process.exit();
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedData();