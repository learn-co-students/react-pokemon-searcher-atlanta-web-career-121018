import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

    handleClick = () => {
        this.props.toggleSprite(this.props.pokemon)
    }

    render() {
        return (
            <Card>
                <div>
                    <div className="image" onClick={this.handleClick}>
                        <img src={this.props.pokemon.frontShown ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" width='100%' />
                    </div>

                    <div className="content">
                        <div className="header">{this.props.pokemon.name}</div>
                    </div>

                    <div className="extra content">
                        <span><i className="icon heartbeat red" />{this.props.pokemon.stats.find(s => s.name === 'hp').value || 50}</span>
                    </div>
                </div>
            </Card>
        )
    }
}

export default PokemonCard
