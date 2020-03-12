// Redux: Avoiding Object Mutations with Object.assign() and ...spread

const toggleTodo = todo => {
  /*
1. Yöntem çalışır ama object mutate yani değişime uğrar

  todo.complated = !todo.complated;
  return todo;

  2. Yöntem
  Object.assign({},currentObject,{changedProperties}
  boş bir obje' ye  todo objesini içerisindeki complated değeri değiştirilp atama yapılıyor.

  return Object.assign({}, todo, {
    complated: !todo.complated
  });

  */

  //3. Yöntem spread fonksiyon ile

  return {
    ...todo,
    complated: !todo.complated
  };
};

// test

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: "Learn Redux",
    complated: false
  };

  const todoAfter = {
    id: 0,
    text: "Learn Redux",
    complated: true
  };

  deepFreeze(todoBefore);
  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();
console.log("All tests passed");
