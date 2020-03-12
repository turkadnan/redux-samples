// Redux: Writing a Todo list Reducer (Toggling a Todo)

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complated: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo=>{
        if (todo.id !==action.id) {
          return todo;
        }
        return {
          ...todo,
          complated:!todo.complated
        }
      })

    default:
      state;
  }
};

// test

const testAddTodos = () => {
  const stateBefore = [];

  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      complated: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      complated: false
    },
    {
      id: 1,
      text: "Go Shopping",
      complated: false
    }
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      complated: false
    },
    {
      id: 1,
      text: "Go Shopping",
      complated: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodos();
testToggleTodo();

console.log("All tests passed");
