const https = require('https')
const { join } = require('path')
// const { writeFile } = require('fs/promises')

const seederBaseFolder = join(__dirname, '../../tests', 'mocks')
// const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

const BASE_URL = 'https://pokeapi.co/api/v2'

class TeamRepository {
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const chunks = []
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

  async listPokemons() {
     const pokemons = await this.makeRequest(`${BASE_URL}/pokemon`)
    //  await write('valid-team.json', pokemons)    

     return pokemons.results
  }

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

/*
const pokemon1 = await this.makeRequest(`${BASE_URL}/pokemon/6`)
    const pokemon2 = await this.makeRequest(`${BASE_URL}/pokemon/9`)
    const pokemon3 = await this.makeRequest(`${BASE_URL}/pokemon/12`)
    const name1 = pokemon1.forms.map(name => name.name)
    const move1 = pokemon1.moves.map(move => move.move.name).slice(0, 3)
    const name2 = pokemon2.forms.map(name => name.name)
    const move2 = pokemon2.moves.map(move => move.move.name).slice(0, 3)
    const name3 = pokemon3.forms.map(name => name.name)
    const move3 = pokemon3.moves.map(move => move.move.name).slice(0, 3)
    const pokemons = [
      {
        name: name1[0],
        moves: move1,
      },
      {
        name: name2[0],
        moves: move2,
      },
      {
        name: name3[0],
        moves: move3,
      },
    ]
    await write('valid-team.json', pokemons)
    return pokemon1.results
*/