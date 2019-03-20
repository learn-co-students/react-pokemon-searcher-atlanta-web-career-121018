import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const JSONAPI = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

    state = {
        pokemon: [],
        searchTerm : ''
    }

    componentDidMount() {
        this.renderPokemon()
    }

    fetchPokemon = () => {
        return fetch(JSONAPI).then(res => res.json())
    }

    renderPokemon = () => {
        this.fetchPokemon().then(pokemonData => {
            console.log(pokemonData)
            const addPokemonData = pokemonData.map(pokemon => ({ ...pokemon, frontShown: true }))
            this.setState({ pokemon: addPokemonData })
        })
    }

    toggleSprite = (pokemon) => {
        console.log(pokemon)
        let holder = pokemon.id
        const newPokeSprite = this.state.pokemon.map(poke => (poke.id === pokemon.id ? ({ ...poke, frontShown: !poke.frontShown }) : poke ))
        this.setState({ pokemon: newPokeSprite }, () => console.log(this.state.pokemon.find((poke) => poke.id === holder)))
    }

    handleSearch = (event, {value}) => {
        this.setState({ searchTerm: value })
    }

    postNewPoke = (newPokeName, newPokeHP, newPokeFrontSprite, newPokeBackSprite) => {
        fetch(JSONAPI, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({
                name: newPokeName,
                stats: [
                    {
                        name: 'hp',
                        value: newPokeHP
                    }
                ],
                sprites: {
                    front: newPokeFrontSprite,
                    back: newPokeBackSprite
                }
            })
        }).then(() => this.renderPokemon())
    }

    render() {
        // console.log(this.state.searchTerm)
        const searchedPokes = this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))
        return (
            <div>
                <PokemonForm postNewPoke={this.postNewPoke}/>
                <br />
                <h1>Pokemon Searcher</h1>
                <br />
                <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
                <br />
                <PokemonCollection pokemons={searchedPokes} toggleSprite={this.toggleSprite} />
                <br />
            </div>
        )
    }
}

export default PokemonPage
