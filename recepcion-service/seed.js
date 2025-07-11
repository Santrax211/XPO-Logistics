const { sequelize, Supplier, Ingress } = require('./models')
const bcrypt = require('bcryptjs');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true }); // cuidado con esto

    const supplier1 = await Supplier.create({
      name: 'Proveedor 1',
      contact: 'contacto1@empresa.com',
    });

    const supplier2 = await Supplier.create({
      name: 'Proveedor 2',
      contact: 'contacto2@empresa.com',
    });

    await Ingress.create({
      supplier_id: supplier1.supplier_id,
      reference: 'Ingreso 001',
      status: 'PENDING',
    });

    await Ingress.create({
      supplier_id: supplier2.supplier_id,
      reference: 'Ingreso 002',
      status: 'COMPLETED',
    });

    console.log('Datos iniciales insertados con éxito');
    process.exit();
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedData();