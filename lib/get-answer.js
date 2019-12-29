'use strict'

const MarkovGen = require('markov-generator')

module.exports = (mode) => {
  const data = require(`./data/${mode}.json`)
  const markov = new MarkovGen({
    input: data,
    minLength: 7
  })

  const sentence = markov.makeChain()

  return sentence
}
