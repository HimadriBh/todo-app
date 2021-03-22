const express = require('express');

const router = express.Router();

// get todos controller function
const { getAllTodos, createTodo, deleteTodo } = require('../controllers/Todo');

// route  /todos
// method 'GET', 'POST'
router.get('/', getAllTodos);
router.post('/', createTodo);

// route /todos/delete
// method 'GET',
router.get('/delete', deleteTodo);

module.exports = router;