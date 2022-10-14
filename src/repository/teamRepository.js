const https = require('https')

const BASE_URL = 'https://pokeapi.co/api/v2'

class TeamRepository {
  async makeRequest(url) {
    const chunks = []
    return new Promise((resolve, reject) => {
      https.get(url, response => {
        response.on('data', data => {
          chunks.push(data)
        })
        response.on('error', reject)
        response.on('end', () => {
          const data = Buffer.concat(chunks)
          resolve(JSON.parse(data))
        })
      })
    })
  }

  //Get all pokemons to make a random team
  async listPokemons() {
     const pokemons = await this.makeRequest(`${BASE_URL}/pokemon`)  
     return pokemons.results
  }

  //Search for one specific pokemon, using the url
  async foundPokemon(urlPokemon) {
    const response = await this.makeRequest(`${BASE_URL}/pokemon/${urlPokemon}`)
    const pokemon = {
      name: response.forms.map(name => name.name),
      moves: response.moves.map(move => move.move.name).slice(0,3)
    }
    return pokemon
  }
}

module.exports = TeamRepository