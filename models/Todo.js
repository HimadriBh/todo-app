const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  description:{
    type: String,
    required: true
  },
  category:{
    type: String,
    enum:['work', 'personal', 'school', 'cleaning', 'other'],
    default: 'personal'
  },
  DueDate: Date
})

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;