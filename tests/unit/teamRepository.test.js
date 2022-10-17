const { describe, it } = require('mocha') 
const { expect } = require('chai')
const TeamRepository = require('../../src/repository/teamRepository')

const mocks = {
  valid_pokemon1: require('../mocks/valid-moves-pokemon1.json'),
  valid_pokemon2: require('../mocks/valid-moves-pokemon2.json'),
  valid_pokemon3: require('../mocks/valid-moves-pokemon3.json'),
  valid_pokemons: require('../mocks/valid-pokemons.json'),
  valid_team: require('../mocks/valid-team.json'),
}

const teamRepository = new TeamRepository()
describe('TeamRepository Suite test', () => {
  describe('list pokemon', () => {
    it('Should return a list of pokemons', async () => {
      const expected = mocks.valid_pokemons.results;
      const result = await teamRepository.listPokemons()

      expect(result).to.be.deep.equal(expected);
    })

    it('Should return a specific pokemon', async () => {
      const expected = mocks.valid_team[0];
      const pokemon = 6;
      const result = await teamRepository.foundPokemon(pokemon);

      const pokemonChoose = {
        name: result.name[0],
        moves: result.moves
      }

      expect(pokemonChoose).to.be.deep.equal(expected);
    })
  })
})