const http = require('http');
const TeamRepository = require('../src/repository/teamRepository')

const routes = {
  '/team:get': async (request, response) => {
    // const teamRepository = new TeamRepository()
    // const result = await teamRepository.team()

    response.write('Success')
    return response.end()
  },

  default: (request, response) => {
    response.write('Calma lá mestre Pokemon você saiu de sua rota')
    return response.end()
  }
}

const handler = (request, response) => {
  const { url, method } = request
  const routeKey = `${url}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  return chosen(request, response)
}

const api = http.createServer(handler)
            .listen(3000, () => console.log('app running at', 3000))

module.exports = api