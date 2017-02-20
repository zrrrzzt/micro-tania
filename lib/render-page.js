'use strict'

module.exports = (data) => {
  return `<html><body style="text-align: center"><h1 style="font-size: 4em">Visdom fra Tania</h1><div style="font-size: 3em; margin-bottom: 1em">${data.description}</div><div style="margin: 1em"><button style="font-size: 3em" onclick="window.location.reload()">Gi meg mer</button></div></body></html>`
}
