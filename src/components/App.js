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
  
  handleAdopt = (petId) => {
    console.log('test')
    for (let i = 0; i < this.state.pets.length; i++) {
      if (this.state.pets[i].id === petId) {
        this.setState(prevState => {
          let newItem = this.state.pets[i]
          newItem.isAdopted = true
          const newList = prevState.pets.filter(check => check.id !== petId)
          return {
            ...prevState,
            pets: [...newList, newItem]
          } 
        })
      }
    }
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
              <PetBrowser onAdoptPet={this.handleAdopt} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
