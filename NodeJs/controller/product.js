const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');

const model = require('../model/product');
const Product = model.Product;

exports.getProduct = (req,res)=>{
    res.json(products);
  }
  
exports.getProducts = async (req, res)=>{
    const products = await Product.find()
    res.json(products);
  }
  
exports.postProduct = (req,res)=>{
    console.log(req.body);
    const product = new Product();
    product.title = "choy";
    product.author = "cp";
    product.body = "ramu";
    product.save((err, doc) => {
      console.log({err, doc});
    })
  }