const { sequelize, ReportRequest, ReportConfig } = require('./models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });

    const reportRequest1 = await ReportRequest.create({
      type: 'STOCK',
      requested_by: 1, 
    });

    const reportRequest2 = await ReportRequest.create({
      type: 'MOVEMENTS',
      requested_by: 2, 
    });

    await ReportConfig.create({
      report_id: reportRequest1.report_id,
      filters: { category: 'electronics' },
    });

    await ReportConfig.create({
      report_id: reportRequest2.report_id,
      filters: { dateRange: '2023-01-01 to 2023-12-31' },
    });

    console.log('Datos iniciales insertados con éxito');
    process.exit();
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedData();