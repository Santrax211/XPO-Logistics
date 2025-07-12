const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor de Seguridad en ejecución en el puerto ${PORT}`);
});