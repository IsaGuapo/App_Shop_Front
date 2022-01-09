//MODULES
const mongoose = require('mongoose');


// SCHEMA DE MONGOOSE
const fabSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'El fabricante debe tener un nombre'],
      //trim borrara los espacios que los usuarios pongas de más tanto por delante como por detrás del nombre
      trim: true,
    },
    cif:{
        type: String,
        required:[true, 'Debe guardar el CIF'],
        trim: true,
    },
    addres:{
        type: String,
        required:[true, 'Debe escribir una dirección'],
        trim: true,
    },
});


//mongoose model
const Fab = mongoose.model('Fab',fabSchema);
//export model
module.exports = Fab;




