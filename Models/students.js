const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  age: {
    type: Number
  }
})
module.exports = mongoose.model('todos', studentSchema);

