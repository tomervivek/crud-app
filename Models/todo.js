const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  todoitem: {
    type: String
  },
})
module.exports = mongoose.model('todoitems', todoSchema);
