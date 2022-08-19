const { describe, it } = require('mocha') 
const { expect } = require('chai')
const TeamRepository = require('../../src/repository/teamRepository')

const mocks = {
  valid_pokemon1: require('../mocks/valid-pokemon1.json'),
  valid_pokemon2: require('../mocks/valid-pokemon2.json'),
  valid_pokemon3: require('../mocks/valid-pokemon3.json'),
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
  })
})