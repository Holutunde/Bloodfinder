import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from '../reducers/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  reducers: reducer,
})

const configStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configStore
