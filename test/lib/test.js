'use strict'

import 'async-to-gen/register'
const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns README as frontpage', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(url)
  t.true(result.data.includes('MIT'), 'frontpage ok')
})

test('it returns html from /html', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}/html`)
  t.true(result.data.includes('Visdom fra Tania'), 'html ok')
})

test('it returns json from /json', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}/json`)
  t.truthy(result.data.description, 'json ok')
})
