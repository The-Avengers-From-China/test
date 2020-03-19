import React, { Component, Fragment } from 'react'
import store from './store/store'
import ActionCreator from './store/actionCreator'
import './index.css'
class List extends Component{
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    console.log(store.getState())
    let {list} = store.getState().todolist
    return(
      <Fragment>
        {list.map((item,index)=>{
          return(
          <li className={item.finish?'green':'red'} key={index}>
            {item.msg}
            <button onClick={()=>{
              ActionCreator.delList(index)
              console.log(index)
            }}>del</button>
            {item.finish?<span>已完成</span>:<button onClick={()=>{
              console.log(index)
              ActionCreator.updateList(index)
            }}>未完成</button>}
          </li>
          )
        })}
      </Fragment>
    )
  }
}

export default List