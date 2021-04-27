import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }
 
  makeRequest = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
      .catch(null)
    } else {
      fetch('/api/pets?type=' + this.state.filters.type)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
      .catch(null)
    }
  }
  
  changeState = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }
  
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeState} onFindPetsClick={this.makeRequest}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
