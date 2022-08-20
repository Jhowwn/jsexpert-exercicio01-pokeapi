const TeamRepository = require('../repository/teamRepository')

class TeamService {
  constructor() {
    this.teamRepository = new TeamRepository()
  }

  getRandomPokemonFromArray(pokemon) {
    const listLength = pokemon.length
    return Math.floor(Math.random() * (listLength))
  }

  getRandomPokemon(pokemon) {
    const randomPokemon = this.getRandomPokemonFromArray(pokemon)
    const pokemonId = pokemon.results[randomPokemon]

    return pokemonId
  }

  async getManyRandomPokemons(countPokemons, team) {
    const pokemons = []
    for (let i = 0; i < team; ++i) {
      const list = this.getRandomPokemonFromArray(countPokemons)
      pokemons.push(list)
    }
    return pokemons
  }

  async getTeamPokemon(team = 3) {
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