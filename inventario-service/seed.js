const bcrypt = require('bcryptjs');
const {
  sequelize,
  Product,
  Category,
  Warehouse,
  Location,
  Stock,
  Users,
  Roles,
  UserRole,
  Movement
} = require('./src/models');

async function seed() {
  await sequelize.sync({ force: true });

  // Categorías
  const cat1 = await Category.create({ name: 'Electrónica' });
  const cat2 = await Category.create({ name: 'Ferretería' });

  // Productos
  const prod1 = await Product.create({
    sku: 'A001',
    name: 'Teclado',
    description: 'Teclado inalámbrico Logitech',
    unit: 'unidad',
    category_id: cat1.category_id,
    status: 'ACTIVE'
  });

  const prod2 = await Product.create({
    sku: 'A002',
    name: 'Taladro',
    description: 'Taladro Bosch profesional',
    unit: 'unidad',
    category_id: cat2.category_id,
    status: 'ACTIVE'
  });

  // Almacén y ubicaciones
  const wh1 = await Warehouse.create({ name: 'Almacén Central', address: 'Lima, Perú' });
  const loc1 = await Location.create({ warehouse_id: wh1.warehouse_id, code: 'A1', description: 'Pasillo A Estante 1' });
  const loc2 = await Location.create({ warehouse_id: wh1.warehouse_id, code: 'B2', description: 'Pasillo B Estante 2' });

  // Stock
  await Stock.create({ product_id: prod1.product_id, location_id: loc1.location_id, quantity: 100 });
  await Stock.create({ product_id: prod2.product_id, location_id: loc2.location_id, quantity: 50 });

  // Roles
  const roles = ['SuperAdmin', 'Administrador', 'Operador', 'Auditor'];
  const roleMap = {};
  for (const name of roles) {
    const role = await Roles.create({ name });
    roleMap[name] = role.role_id;
  }

  // Usuarios
  const usuarios = [
    { username: 'superadmin', email: 'superadmin@xpo.com', password: 'super123', role: 'SuperAdmin' },
    { username: 'admin', email: 'admin@xpo.com', password: 'admin123', role: 'Administrador' },
    { username: 'operador', email: 'operador@xpo.com', password: 'op123', role: 'Operador' },
    { username: 'auditor', email: 'auditor@xpo.com', password: 'auditor123', role: 'Auditor' }
  ];

  let operador_id = null;
  for (const u of usuarios) {
    const hashed = await bcrypt.hash(u.password, 10);
    const user = await Users.create({
      username: u.username,
      email: u.email,
      password_hash: hashed
    });

    await UserRole.create({
      user_id: user.user_id,
      role_id: roleMap[u.role]
    });

    if (u.role === 'Operador') operador_id = user.user_id;
  }

  // Movimientos de prueba
  await Movement.create({
    product_id: prod1.product_id,
    location_id: loc1.location_id,
    type: 'IN',
    quantity: 25,
    performed_by: operador_id
  });

  await Movement.create({
    product_id: prod2.product_id,
    location_id: loc2.location_id,
    type: 'OUT',
    quantity: 10,
    performed_by: operador_id
  });

  console.log('✅ Datos iniciales insertados correctamente');
  process.exit();
}

seed();