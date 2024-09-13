const mongoose = require('mongoose');
const {Schema} = mongoose;//use for validation

const productSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
  });
  
  exports.Product = mongoose.model('Product', productSchema);