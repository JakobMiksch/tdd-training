const test = require('node:test')
const assert = require('node:assert/strict')
const { sum } = require('./sum')

test('sum adds positive numbers', () => {
  const result = sum(1, 2)
  assert.equal(result, 3)
})

test('sum works with negative numbers', () => {
  const result = sum(-5, 2)
  assert.equal(result, -3)
})
