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
