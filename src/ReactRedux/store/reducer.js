import state from './state'
import {CHANGE_NAME,CHANGE_AGE} from './actionType'
export default (prevState = state, actions)=>{
  let newState = JSON.parse(JSON.stringify(prevState))  //深拷贝
  let {type,payload} = actions
  switch (type) {
    case CHANGE_NAME:
      newState.name = payload
      break;
    case CHANGE_AGE:
      newState.age = payload
      break
    default:
      break;
  }
  return newState
}