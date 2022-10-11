const http = require('http');
const TeamService = require('../src/service/teamService')

const routes = {
  '/team:get': async (request, response) => {
    const teamService = new TeamService()
    const result = await teamService.getTeamPokemon(3)
    
    response.write(JSON.stringify(result))
    return response.end()
  },

  default: (request, response) => {
    response.write(JSON.stringify({Success: true}))
    return response.end()
  }
}

const handler = (request, response) => {
  const { url, method } = request
  const routeKey = `${url}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  return chosen(request, response)
}

const api = http.createServer(handler)
            .listen(3000, () => console.log('app running at', 3000))

module.exports = api