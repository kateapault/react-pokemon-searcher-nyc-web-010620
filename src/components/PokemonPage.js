import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const POKEMONURL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    selectedPokemon: [],
    search: '',
    flipped: []
  }

  // let sortedPokemon = pokemon.sort((a,b) => a.hp - b.hp)

  flipPokemon = id => {
    let newFlipped = [...this.state.flipped]
    //console.log(newFlipped.indexOf(id))
    let ind = newFlipped.indexOf(id)

    ind >= 0 ? newFlipped.splice(ind,1) : newFlipped.push(id)
    this.setState({flipped: newFlipped})
  }

  searchPokemon = e => {
    let newSelectedPokemon = this.state.pokemon.filter(pokemon => pokemon.name.includes(e.target.value))
    this.setState({
      search: e.target.value,
      selectedPokemon: newSelectedPokemon
    })
  }

  addPokemon = poke => {
    this.setState({
      pokemon: this.state.pokemon.concat([poke])
    })
  }

  componentDidMount() {
    fetch(POKEMONURL) //Async function
    .then(resp => resp.json())
    .then(pokemonJSON => {
      this.setState({
        pokemon: pokemonJSON, selectedPokemon: pokemonJSON
      })
      //console.log(this.state)
    })
    
  }
  
  render() {
    console.log(this.state.pokemon.sort((a,b) => b.weight - a.weight))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <div></div>
        
        <Search onChange={this.searchPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.selectedPokemon} flipPokemon={this.flipPokemon} flipped={this.state.flipped}/>
      </Container>
    )
  }
}

export default PokemonPage
// Lifecycle methods
// splice
// sorts
// includes