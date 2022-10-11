const TeamRepository = require('../repository/teamRepository')

class TeamService {
  constructor() {
    this.teamRepository = new TeamRepository()
  }

  //Select a random number
  getRandomPokemonFromArray(pokemon) {
    const listLength = pokemon.length
    return Math.floor(Math.random() * (listLength))
  }

  //Get a random number and return one Pokemon
  getRandomPokemon(pokemon) {
    const randomPokemon = this.getRandomPokemonFromArray(pokemon)
    const pokemonId = pokemon.results[randomPokemon]

    return pokemonId
  }

  //Get many random numbers and return many pokemons
  async getManyRandomPokemons(countPokemons, team) {
    const pokemons = []
    for (let i = 0; i < team; ++i) {
      const list = this.getRandomPokemonFromArray(countPokemons)
      pokemons.push(list)
    }
    return pokemons
  }

  //Make a random team pokemon and return a name and moves foreach pokemon 
  async getTeamPokemon(team) {
    const pokemons = await this.teamRepository.listPokemons()
    const fullteam = await this.getManyRandomPokemons(pokemons, team)
    
    const teams = await Promise.all(
      fullteam.map(
        async pokemons => {
          const url = pokemons
          const findPokemon = await this.teamRepository.foundPokemon(url)
          const moves = findPokemon.moves
          return {
            name: findPokemon.name[0],
            moves: moves
          }
        }
      ))

    return teams
  }
}

module.exports = TeamService