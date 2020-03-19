import store from './store'
export default {
  // 增加条例
  addList(msg){
    setTimeout(()=>{
      store.dispatch({
        type:'ADD_LIST',
        payload:msg
      })
    },1000)
  },
  // 删除
  delList(index){
    store.dispatch({
      type:'DEL_LIST',
      payload:index
    })
  },
  // 更改完成状态
  updateList(index){
    store.dispatch({
      type:'UPDATE_LIST',
      payload:index
    })
  }
}