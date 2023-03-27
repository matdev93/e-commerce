const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  SKU: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    typeProduct: {
      type: String,
    },
    material: {
      type: String,
    },
    volumen: {
      type: Number,
      min: 0.1,
    },
  },
  price: {
    type: Number,
    required: True,
    min: 0,
    max: 1000000,
  },
});
