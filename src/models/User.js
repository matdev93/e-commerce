const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Nombre no especificado',
    trim: true,
    lowercase: true,
    minlength: 2,
  },
  email: {
    type: String,
    trim: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  password: {
    type: String,
    match: [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/gm],
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  favoriteProducts: {
    type: mongoose.Types.ObjectId,
    ref: '',
  },
});

const User = mongoose.model('user', userSchema); //* coleccion en base de datos

module.exports = User;
