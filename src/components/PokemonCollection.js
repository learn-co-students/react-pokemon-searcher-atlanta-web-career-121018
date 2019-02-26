import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
// import { prependOnceListener } from 'cluster';

const PokemonCollection = (props) => {
  const pokeList = props.pokemon.map(poke =>
    <PokemonCard
      name={poke.name}
      sprites={poke.sprites}
      hp = {poke.stats.pop()} />)

    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
          <Card.Group itemsPerRow={6}>
            {pokeList}
          </Card.Group>
      </div>
    )

}

export default PokemonCollection
