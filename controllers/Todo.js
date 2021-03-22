const Todo = require('../models/Todo')

// url       /todos
// request   GET
// use       get all todos
const getAllTodos = (req, res) => {
  Todo.find({})
    .then(todos => {
      res.render('home', { title: 'Todo App', todos })
    })
}

// url       /todos
// request   GET
// use       get all todos
const createTodo = async (req, res) => {
  const newTodo = req.body;
  try {
    let todo = await Todo.create(newTodo);

    if(req.xhr){
      return res.status(200).json({
        data: todo
      })
    }

    return res.redirect('back');

  } catch (error) {
    res.redirect('back')
  }
}

// url       /todos/delete/:id
// request   GET
// use       get all todos

const deleteTodo = (req, res) => {
  const id = req.query.id;
  Todo.findByIdAndDelete(id)
  .then((resp) => {
    return res.redirect('back')
  })
  .catch(err => {
    console.log(err)
    res.redirect('back')
  })
}

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo
}