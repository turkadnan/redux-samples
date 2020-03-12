// Redux: Writing a Todo list Reducer (Adding a Todo)

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

  const stateAfter = [{
    id: 0,
    text: "Learn Redux",
    complated: false
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodos();

console.log("All tests passed");
