import React, { Component } from "react";
import { connect } from "react-redux";

import FilterLink from "./components/FilterLink";

import { addTodo, toggleTodo, changeFilter } from "./actions";

let nextTodoId = 0;

const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.complated);
    case "SHOW_COMPLATED":
      return todos.filter(todo => todo.complated);
    default:
      return todos;
  }
};

class TodoApp extends Component {
  render() {
    const {
      todos,
      visibilityFilter,
      addTodo,
      toggleTodo,
      changeFilter
    } = this.props;

    const visibleTodos = getVisibilityTodos(todos, visibilityFilter);
    return (
      <div>
        <input ref={ref => (this.input = ref)} />
        {"  "}
        <button
          onClick={() => {
            addTodo({
              text: this.input.value,
              id: nextTodoId++
            });

            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {visibleTodos.map(todo => (
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.complated ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <p>
          <FilterLink trigger={() => changeFilter("SHOW_ALL")}>
            Show All
          </FilterLink>
          {"  "}
          <FilterLink trigger={() => changeFilter("SHOW_COMPLATED")}>
            Show Complated
          </FilterLink>
          {"  "}
          <FilterLink trigger={() => changeFilter("SHOW_ACTIVE")}>
            Show Active
          </FilterLink>
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  //State Liste reducerlardan geliyor
  const { todos, visibilityFilter } = state;
  return {
    todos,
    visibilityFilter
  };
};



export default connect(mapStateToProps, { addTodo, toggleTodo, changeFilter })(
  TodoApp
);


// const mapDispatchToProps =dispatch=>({
//     addTodo:(todo)=>dispatch(addTodo(todo))
//   });


  // export default connect(mapStateToProps, mapDispatchToProps)(
  //   TodoApp
  // );
