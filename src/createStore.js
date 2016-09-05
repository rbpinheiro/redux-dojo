import todoApp from './reducers/reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(
  todoApp,{},
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

export default store;