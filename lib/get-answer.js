'use strict'

const data = require('./data/answers.json')
const MarkovGen = require('markov-generator')

module.exports = () => {
  let markov = new MarkovGen({
    input: data,
    minLength: 7
  })

  let sentence = markov.makeChain()

  return sentence
}
