const { describe, it, before, beforeEach, afterEach } = require('mocha')
const { expect } = require('chai')
const sinon = require('sinon')
const TeamService = require('../../src/service/teamService')
const TeamRepository = require('../../src/repository/teamRepository')

const mocks = {
  valid_pokemon1: require('../mocks/valid-moves-pokemon1.json'),
  valid_pokemon2: require('../mocks/valid-moves-pokemon2.json'),
  valid_pokemon3: require('../mocks/valid-moves-pokemon3.json'),
  valid_pokemons: require('../mocks/valid-pokemons.json'),
  valid_team: require('../mocks/valid-team.json'),
}

describe('TeamService Suite test', () => {
  let teamService = {}
  let sandBox = {}
  before(() => {
    teamService = new TeamService({ TeamRepository })
  })

  beforeEach(() => {
    sandBox = sinon.createSandbox()
  })
  afterEach(() => {
    sandBox.restore()
  })

  describe('Should get Random items', () => {
    it('Should retrieve a random pokemon from an array', () => {
      const listPokemons = [0, 1, 2, 3, 4]
      const results = teamService.getRandomPokemonFromArray(listPokemons)

      expect(results).to.be.lte(listPokemons.length).and.be.gte(0)
    })

    it('Should choose a random pokemon', () => {
      const listPokemons = mocks.valid_pokemons
      const pokemonIndex = 0

      sandBox.stub(
        teamService,
        teamService.getRandomPokemonFromArray.name
      ).returns(pokemonIndex)

      const results = teamService.getRandomPokemon(listPokemons)
      const expected = listPokemons.results[pokemonIndex]

      expect(teamService.getRandomPokemonFromArray.calledOnce).to.be.ok
      expect(results).to.be.equal(expected)
    })

    it('Should get 3 pokemons', async () => {
      const listPokemons = [0, 1, 2, 3, 4]
      const team = 3

      const spy = sinon.spy(
        teamService,
        teamService.getRandomPokemonFromArray.name
      )

      const results = await teamService.getManyRandomPokemons(listPokemons, team)

      results.forEach(item => {
        expect(listPokemons.includes(item)).to.be.true
      })

      expect(spy.callCount).to.be.equal(team)
    })

    it('Should get a 3 pokemons for a team', async () => {
      const expected = mocks.valid_team
      const teamPokemonsMocked = [6, 9, 12]

      sandBox.stub(
        teamService,
        teamService.getManyRandomPokemons.name
      )
        .onFirstCall()
        .returns(teamPokemonsMocked)

      sandBox.spy(
        teamService,
        teamService.getTeamPokemon.name
      )

      const results = await teamService.getTeamPokemon()

      expect(teamService.getTeamPokemon.calledOnce).to.be.ok
      expect(results).to.be.deep.equal(expected)
    })
  })
})