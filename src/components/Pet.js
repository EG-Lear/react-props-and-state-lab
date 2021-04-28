import React from 'react'
{/*'♀' OR '♂' */}

class Pet extends React.Component {
  genderCheck = () => { // check which gender icon to use
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  adoptStatus = () => {
    if (this.props.pet.isAdopted === true) { // checks adoption status and diplays correct button
      return <button className="ui disabled button">Already adopted</button>
    } else{
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {this.genderCheck()}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}lb</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptStatus()}
        </div>
      </div>
    )
  }
}

export default Pet
