const mongoose = require('mongoose');

mongoose.set('strictQuery', true); //* Linea opcional, en caso de que lance una advertencia

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log('Base de datos conectado con exito'));
