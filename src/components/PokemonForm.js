import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()

        const newPokeName = event.target.name.value.toLowerCase()
        const newPokeHP = parseInt(event.target.hp.value)
        const newPokeFrontSprite = event.target.frontUrl.value
        const newPokeBackSprite = event.target.backUrl.value

        event.target.reset()

        this.props.postNewPoke(newPokeName, newPokeHP, newPokeFrontSprite, newPokeBackSprite)
    }

    render() {
        return (
            <div>
                <h1>Add a Pokemon!</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input fluid label="Name" placeholder="Name" name="name" />
                        <Form.Input fluid label="hp" placeholder="hp" name="hp" />
                        <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
                        <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default PokemonForm

// constructor() {
//     super()

//     this.state = {
//         name: '',
//         hp: '',
//         frontUrl: '',
//         backUrl: ''
//     }
// }
