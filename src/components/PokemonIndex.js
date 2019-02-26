import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  constructor() {
    super()

    this.state = {
      pokemon: [],
      searchEntry: ''
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon)
      this.setState({
        pokemon: pokemon
      })
    })
  }  

  addPokemon = (poke) => {
    this.setState({ 
      pokemon: [...this.state.pokemon, poke] 
    })
  }

  

  handleSearch = (e, {value}) => {
    this.setState({ 
      searchEntry: value 
    })
  } 

  render() {

    const filteredPokemon = this.state.pokemon.filter(poke =>
      poke.name.includes(this.state.searchEntry)
    )

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
