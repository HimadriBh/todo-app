{
  // function to add todo using ajax request
  const createTodo = () => {
    $('#todo-form').submit(function(e){
      e.preventDefault();
      e.stopPropagation();
      let formdata = $(this).serialize()
      // jquery ajax to add todo to request server to save todo
      $.ajax({
        url: '/todos',
        method: 'POST',
        data: formdata,
        success: function(data){
          let todoItem = addTodo(data.data);
          // show the todo description to the todo list on page
          $('#todos-list').prepend(todoItem);
        },
        error: function(err){
          console.log(err)
        }
      })
    })
  }

  // cross/strike off a todo when todo checkbox is clicked
  const strikeOffTodo = () => {
    let itemCheckbox = $('.todo-item').find('input[type=checkbox]');
    itemCheckbox.each(function(item){
      console.log($(this));
      $(this).on('change', function(){
        console.log($(this));
        if ($(this).prop("checked") ) {
          // alert('checked');
           $(this).parent('.item-checkbox').siblings('.todo-details').find('p').css('text-decoration', 'line-through')
        }else {
          $(this).parent('.item-checkbox').siblings('.todo-details').find('p').css('text-decoration', 'none')
        }
      })
    })
  }

  const addTodo = (todo) => {

    return $(`<div class="todo-item">
            <div class="item-checkbox"><input type="checkbox"></div>
            <div class="todo-details">
              <p >${todo.description}</p>
              <br>
              <p><span><i class="fas fa-calendar-alt"></i></span>${todo.dueDate.toLocaleString()}</p>
            </div>
            <div class="item-category">
              <button class="${todo.category}"> ${todo.category}</button>
            </div>
            <div class="item-delete" title="Delete todo">
              <a href="todos/delete/?id=${todo.id}"><i class="far fa-trash-alt"></i></a>
            </div>
          </div>`)
  }


  createTodo();
  strikeOffTodo();

}