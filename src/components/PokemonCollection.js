import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

    renderCards = (props) => {
        return this.props.pokemons.map(pokemon => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} toggleSprite={this.props.toggleSprite}/>
        })
    }

    render() {
        return (
            <Card.Group itemsPerRow={6}>
                {this.renderCards()}
            </Card.Group>
        )
    }
}

export default PokemonCollection
    