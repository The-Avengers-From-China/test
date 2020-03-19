import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from './store/actionCreator'
class Son1 extends Component{
  render(){
    let {name,age,CHANGE_AGE,CHANGE_NAME} = this.props
    return(
      <div>
        <h3>我是子组件</h3>
        {name}{age}
        <hr/>
        <button onClick={CHANGE_NAME}>改变姓名</button>
        <button onClick={CHANGE_AGE}>改变年纪</button>
      </div>
    )
  }
}

export default connect(state=>state,dispatch=>bindActionCreators(actionCreator,dispatch))(Son1)