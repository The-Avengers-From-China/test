import {createStore,combineReducers} from 'redux'
import todolist from './reducer'

let Reducer = combineReducers({todolist})
let store = createStore(Reducer)
export default store