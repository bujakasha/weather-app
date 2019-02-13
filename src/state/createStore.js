import {createStore as reduxCreateStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'

const initialState = {}
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware))

const createStore = () => reduxCreateStore(reducer, initialState, enhancer)
export default createStore
