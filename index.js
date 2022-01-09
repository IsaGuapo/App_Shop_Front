// MODULES
const express = require('express');
const app = express();
const productRouter = require ('./routes/productRoutes');

//llamada a BBDD
const mongoose = require('mongoose');
//configuracion de dotenv y fichero .env para que reconozca mi app donde esta mi url de MongoDb
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });



// MIDDLEWARES
// (Estos dos se usan en lugar de 'body-parser' que ya están deprecated. Sólo actúan en POST y PUT requests. Son necesarios para capturar el body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ROUTES
app.use('/api/products', productRouter);

 
//Conexion con la bbdd de MongoDb
const DB = process.env.DATA_URL_MONGOOSE;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('DB Conection successfull!'));



// SERVER
const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});