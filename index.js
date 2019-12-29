const { readFile } = require('fs').promises
const md = require('markdown-it')()
const { send } = require('micro')
const renderPage = require('./lib/render-page')
const getAnswer = require('./lib/get-answer')

module.exports = async (request, response) => {
  const { url } = request
  const query = await request.query
  const mode = query.mode ? query.mode : 'normal'
  const isJson = /json/.test(url)
  const isHtml = /html/.test(url)
  if (isJson || isHtml) {
    const results = { description: getAnswer(mode) }
    if (isJson) {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.setHeader('Access-Control-Allow-Methods', 'GET')
      send(response, 200, results)
    } else if (isHtml) {
      response.setHeader('Content-Type', 'text/html; charset=utf-8')
      send(response, 200, renderPage(results))
    }
  } else {
    const readme = await readFile(`${__dirname}/README.md`, 'utf-8')
    send(response, 200, md.render(readme))
  }
}
