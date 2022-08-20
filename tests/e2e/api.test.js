const { describe, it } = require('mocha')
const request = require('supertest')
const api = require('../../src/api')
const { expect } = require('chai')

describe('API Suite test', () => {
  describe('/team', () => {
    it('Should request the team and return HTTP Status 200', async () => {
      const response = await request(api).get('/team')
      expect(response.statusCode).to.be.equal(200)
    })
    
    it('Should return a 3 Pokemons for the team', async () => {
      const response = await request(api).get('/team').expect(200)
      expect(response.body.length).to.be.equal(3);
    })
  })

  describe('/hello', () => {
    it('Should request an inexistent route /hello redirect to /home', async () => {
      const response = await request(api).get('/hello')
      const expected = JSON.stringify({Success: true})
      expect(response.statusCode).to.be.equal(200)
      expect(response.text).to.be.equal(expected)
    })
  })
})
