import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
    <div className="ui cards">
      <ul>
        {this.props.pets.map(critter => <Pet pet={critter} key={critter.id} onAdoptPet={this.props.onAdoptPet}/>)}
      </ul>
    </div>
    )
  }
}

export default PetBrowser
