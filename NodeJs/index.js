const express = require('express');
const mongoose = require('mongoose');

const server = express();
const productController = require('./controller/product');
//API endpoint - Route
server.use(express.json());


//connecting  database 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database sucessfully connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// server.use(morgan('default'));
// server.use(express.static('public'));

//get products
server.get('/products', productController.getProducts)
//post a single product
server.get('/products/:id', productController.getProduct)
//post request
server.post('/products/hero',productController.postProduct)




server.listen(8080, ()=>{
  console.log('server starter');
});
