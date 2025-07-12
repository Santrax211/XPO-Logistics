const { sequelize, ErpLog } = require('./models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });

    await ErpLog.create({
      event_type: 'SYNC_START',
      result: 'SUCCESS',
      detail: 'Iniciando sincronización de inventario con ERP',
    });

    await ErpLog.create({
      event_type: 'SYNC_END',
      result: 'SUCCESS',
      detail: 'Sincronización de inventario completada exitosamente',
    });

    console.log('Datos iniciales insertados con éxito');
    process.exit();
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedData();