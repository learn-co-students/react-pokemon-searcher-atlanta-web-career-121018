import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sprite: this.props.sprites.front
    }
  }

  handleClick = () => {
    if (this.state.sprite === this.props.sprites.front) {
      this.setState({
        sprite: this.props.sprites.back
      })
    } else {
      this.setState({
        sprite: this.props.sprites.front
      })
    }
  }
  
  
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.sprite} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
