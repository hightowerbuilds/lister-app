import React, { Component } from 'react'
import Container from './Components/Container'
import DataEntry from './Components/DataEntry'
import './App.css'

class App extends Component {

  render(){
    return(
      <>
      <div className='column'>
      <DataEntry />
      </div>

      <div className='app'>
      <Container />
      </div>
      </>
    )
  }
}

export default App
