import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemon: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.renderPokemon()
    }

    fetchPokemon = () => {
        return fetch(URL).then(res => res.json())
    }

    renderPokemon = () => {
        this.fetchPokemon().then(data => {
            // debugger
            this.setState({
                pokemon: data
            })
        })
    }

    searchHandler = event => {
        // debugger
        this.setState({
            searchTerm: event.target.value
        })
        this.filterPokemon()
    }

    filterPokemon = () => {
        this.fetchPokemon().then(data => {
            this.setState({
                pokemon: data.filter(poke =>
                    poke.name.includes(this.state.searchTerm)
                )
            })
        })
    }

    postPokemon = (newName, newHp, newFrontUrl, newBackUrl) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                stats: [
                    {
                    name: 'hp',
                    value: newHp
                    }
                ],
                sprites: {
                    front: newFrontUrl,
                    back: newBackUrl
                }
            })
        }).then(() => this.renderPokemon())
    }


    render() {
        return (
            <div>
                <h1>Pokemon Searcher</h1>
                <br />
                <Search
                    onSearchChange={this.searchHandler}
                    showNoResults={false} />
                <br />
                {this.state.pokemon.length > 0 ?
                <PokemonCollection
                    pokemon={this.state.pokemon} /> : <h2>No Pokemon found!</h2> }
                <br />
                <PokemonForm
                    postPokemon={this.postPokemon}/>
            </div>
        )
    }
}

export default PokemonPage
