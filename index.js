const readFileSync = require('fs').readFileSync
const md = require('markdown-it')()
const { parse } = require('url')
const { send } = require('micro')
const renderPage = require('./lib/render-page')
const getAnswer = require('./lib/get-answer')

module.exports = async (request, response) => {
  const { pathname, query } = await parse(request.url, true)
  if (pathname === '/json' || pathname === '/html') {
    const results = { description: getAnswer(query.mode || 'normal') }

    if (pathname === '/json') {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      send(response, 200, results)
    } else if (pathname === '/html') {
      response.setHeader('Content-Type', 'text/html; charset=utf-8')
      send(response, 200, renderPage(results))
    }
  } else {
    const readme = readFileSync(`${__dirname}/README.md`, 'utf-8')
    send(response, 200, md.render(readme))
  }
}
