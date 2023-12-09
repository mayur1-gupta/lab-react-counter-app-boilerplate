import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react'
import './App.css'


class App extends Component{
constructor(){
  super()
 this.state= {
 count: 0
 }
}
Increase =()=>{
  this.setState({count: this.state.count+1})
}
Decrease =()=> {
  if (this.state.count>0){
  this.setState({count: this.state.count-1})
}
}
Reset =() =>{
  this.setState({count:0})
}
render(){
  return(
    <>
      <div className='body'>
          <div>
           <h1>Counter App</h1> 
          </div>
          <div className='count'>{this.state.count}</div>
          <div>
            <button onClick={this.Increase}>Increase</button>
            <button onClick={this.Decrease}>Decrease</button>
            <button onClick={this.Reset}>Reset</button>
          </div>
      </div>
    </>
  )
}
} 

export default App
