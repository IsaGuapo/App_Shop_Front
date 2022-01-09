//MODULES
const express = require('express');
const productsControllers = require('../controllers/productsControllers')

const router = express.Router();

//ROUTES
router
    .route('/')
    .get(productsControllers.getAllProducts)
    .post(productsControllers.createProduct);

router
    .route('/:id')
    .get(productsControllers.getProduct)
    .patch(productsControllers.updateProduct)
    .delete(productsControllers.deleteproduct);


//exports router
module.exports = router;