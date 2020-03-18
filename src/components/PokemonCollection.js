import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(poke => <PokemonCard key={poke.id} poke={poke} flipPokemon={this.props.flipPokemon} flipped={this.props.flipped}/>)}
      </Card.Group>
    )
  }
}

//[0,5,4,2,3,1]
// 0-5-4-2-3-1
// pokemon [{},{},{},{},{},{},]
export default PokemonCollection
