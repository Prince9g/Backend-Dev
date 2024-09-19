const mongoose = require('mongoose');
const {Schema} = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected Successfully');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const newTask = new Schema({
    title: String,
    date: String
});

exports.Task = mongoose.model('Task', newTask);



