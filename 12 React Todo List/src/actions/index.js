
// const addTodo = todo =>
//   ({
//     type: "ADD_TODO",
//     text: todo.text,
//     id: todo.id
//   })

const addTodo = todo => {
  return dispatch => {
    dispatch({
      type: "ADD_TODO",
      text: todo.text,
      id: todo.id
    });
  };
};

const toggleTodo = id => {
  return dispatch => {
    dispatch({
      type: "TOGGLE_TODO",
      id
    });
  };
};

const changeFilter = filter => {
  return dispatch => {
    dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter
    });
  };
};

// dispatch => ({
//   // dispatching plain actions
//   addTodo: todo => dispatch(addTodo(todo))
// });

export { addTodo, toggleTodo, changeFilter };
