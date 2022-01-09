//modules
const mongoose = require('mongoose');
const Fab = require('../models/fabModels');


// SCHEMA MONGOOSE
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Debe escribir el nombre del producto'],
      trim: true,
    },
    price:{
        type: Number,
        required:[true, 'Debe escribir el precio'],
    },
    rating:{
        type: Number,
    },
    img_url:{
        type: String,
        required:[true, 'Debe guardar una imagen'],
    },
    fab:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Fab",
    }
});

module.exports = mongoose.model ('Products',productSchema);