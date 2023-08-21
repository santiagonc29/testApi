// src/main.js

const express = require('express');
const cors = require('cors'); // Importa la biblioteca cors
const bodyParser = require('body-parser');
const config = require('./config/config');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
app.use(cors()); // Habilita cors para todas las rutas

app.use(bodyParser.json());

// Configuración de entorno
const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];

// Rutas
app.use('/api', hotelRoutes);

app.listen(envConfig.port, () => {
  console.log(`Server is running on port ${envConfig.port} in ${env} mode`);
});
