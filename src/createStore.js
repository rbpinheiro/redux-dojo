
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
let store = createStore(
  todoApp,
  {
  },
  window.devToolsExtension && window.devToolsExtension()
)

export default store;