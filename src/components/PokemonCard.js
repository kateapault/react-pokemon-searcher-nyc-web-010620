import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  render() {
    const poke = this.props.poke
    const hp = poke.stats.find(stat => stat.name == "hp").value
   //onClick={this.props.flipPokemon(poke.id)}
   //onClick=2
    return (
      <Card>
        <div onClick={() => this.props.flipPokemon(poke.id)}>
            <div className="image">
              {!this.props.flipped.includes(poke.id) ?
                <img alt="oh no!" src={poke.sprites.front}/>
                :
                <img alt="oh no!" src={poke.sprites.back}/>
              }
            </div>
            <div className="content">
              <div className="header">{poke.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {hp} hp
              </span>
            </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
