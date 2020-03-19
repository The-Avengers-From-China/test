import state from './state'

export default(prevState = state, actions)=>{
  let newState = prevState
  let {type,payload} = actions
  switch (type) {
    case 'ADD_LIST':
      newState.list.push({msg:payload,finish:false})
      break;
    case 'DEL_LIST':
      newState.list.splice(payload,1)
      break
    case 'UPDATE_LIST':
      newState.list[payload].finish=true
      break
    default:
      break;
  }
  return newState
}