'use strict'

const shuffle = require('knuth-shuffle').knuthShuffle
const data = require('./data/answers.json')

module.exports = () => {
  const shuffled = shuffle(data.slice(0))

  return shuffled[0]
}
