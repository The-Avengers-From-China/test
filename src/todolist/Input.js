import React, { Component, Fragment } from 'react'
import ActionCreator from './store/actionCreator'
class Input extends Component{
  render(){
    return(
      <Fragment>
        <input type="text" ref='input'/>
        <button onClick={()=>{
          let msg = this.refs.input.value
          console.log(msg)
          ActionCreator.addList(msg)
        }}>add</button>
      </Fragment>
    )
  }
}

export default Input