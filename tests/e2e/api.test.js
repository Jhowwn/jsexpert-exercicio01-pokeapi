const { describe, it } = require('mocha')
const request = require('supertest')
const api = require('../../src/api') 
const { expect } = require('chai')

describe('API Suite test', () => {
  describe('/team', ()=> {
    it('Should request the team and return HTTP Status 200', async () => {
      const response = await request(api).get('/team')
      expect(response.statusCode).to.be.equal(200)
      expect(response.text).to.be.equal('Success')
    })
  })

  describe('/hello', () => {
    it('Should request an inexistent route /hello redirect to /home', async () => {
      const response = await request(api).get('/hello')
      expect(response.statusCode).to.be.equal(200)
      expect(response.text).to.be.equal('Calma lá mestre Pokemon você saiu de sua rota')
    })
  })
})