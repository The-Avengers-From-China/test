import React, { Component } from 'react'
import Input from './Input'
import List from './List'
class Box extends Component{
  render(){
    return(
      <div className='box'>
        <Input></Input>
        <List></List>
      </div>
    )
  }
}

export default Box