// Redux: Avoiding Array Mutations with concat(), slice(), and ...spread
const addCounter = list => {
  //list.concat(0) yerine spread fonksiyonunu uygulayabiliriz
  return [...list, 0];
};

const removeCounter = (list, index) => {
  /*1. Yöntem
    return list
    .slice(0,index)
    .concat(list.slice(index+1));
    */

  //2. Yöntem. Yukarıdaki ile aynı işi yapar ama daha kısa
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
  /*1. Yöntem (Dizi mutate yani mutasyana uğradığı için çok tercih edilmez)
  list[index]++;
  return list;
  */

  /*2 .Yöntem
  return list
  .slice(0,index)
  .concat(list[index]+1)
  .concat(list.slice(index+1));
  */
  //3. Yönte. 2. yöntemin spread kullanılmış hali
  return [
    ...list.slice(0, index), // 0 dan itibaren index kadar olan kısmı ekle [1,2,3] ise ve index "1" ise değer "1" dir
    list[index] + 1, // araya [1,2,3] -> list[1] = 2 sayısına 1 ekle ve birleştir
    ...list.slice(index + 1)
  ]; // son olarak [1,2,3] dizisinde list.slice(1 + 1)-> list.slice(2) -> dizide 2 indisi ve sonrasını spread e ekle demek
};

// Test

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);
  expect(addCounter(listBefore)).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [1, 2, 3];
  const listAfter = [1, 3];
  deepFreeze(listBefore);
  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

const tesrIncrementCounter = () => {
  const listAfter = [1, 2, 3];
  const listBefore = [1, 3, 3];
  deepFreeze(listBefore);
  expect(incrementCounter(listAfter, 1)).toEqual(listBefore);
};

testAddCounter();
testRemoveCounter();
tesrIncrementCounter();
console.log("All tests passed");
