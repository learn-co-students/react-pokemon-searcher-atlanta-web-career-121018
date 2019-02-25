import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
    render() {
        const eachPokemon = this.props.pokemon.map(pokemon =>
            <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}/>)

        return (
            <Card.Group
                itemsPerRow={6}>
                <br /><br />
                {eachPokemon}
            </Card.Group>
        )
    }
}

export default PokemonCollection
