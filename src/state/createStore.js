import {createStore as reduxCreateStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'

const initialState = {}
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // for universal ("isomorphic") apps
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        // see: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware))

const createStore = () => reduxCreateStore(reducer, initialState, enhancer)
export default createStore
