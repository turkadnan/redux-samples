
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // action -> dispatch kullanımı "Error: Actions must be plain objects. Use custom middleware for async actions." hatası verdiğinden bu tip hataları gidermek için thunk kullanılır
import * as reducers from "../reducers";

//const middlewares = [thunk, sagaMiddleware, routeMiddleware];
const middlewares = [thunk];

const store = createStore(
  combineReducers({
    ...reducers
  }),

  compose(applyMiddleware(...middlewares))
);

export default store;
