const index = require('./index')

describe('first ever ci test', function () {
  test('index.square', function () {
    expect(index.square(5)).toBe(25)
  })
  test('index.echo', function () {
    const txt = 'Test txt FiLe!'
    expect(txt).toBe(txt)
  })
})