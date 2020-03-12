// Redux: Reducer Composition with Arrays

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        complated: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        complated: !state.complated
      };
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;

    default:
      return state;
  }
};

const todosApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};

const { createStore } = Redux;
//const store = createStore(todos);
const store = createStore(todosApp);

console.group("Initial State");
console.log(store.getState());
console.groupEnd();

console.group("Dispatch Add Todo For Learn Redux");
store.dispatch({ type: "ADD_TODO", id: 0, text: "Learn Redux" });
console.log(store.getState());
console.groupEnd();

console.group("Dispatch Add Todo for Go Shopping");
store.dispatch({ type: "ADD_TODO", id: 1, text: "Go Shopping" });
console.log(store.getState());
console.groupEnd();

console.group("Dispatch Toggle Todo for Go Shopping");
store.dispatch({ type: "TOGGLE_TODO", id: 1 });
console.log(store.getState());
console.groupEnd();

console.group("Set visibility filter to SHOW_COMPLATED");
store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: 'SHOW_COMPLATED' });
console.log(store.getState());
console.groupEnd();
