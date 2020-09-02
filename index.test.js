const index = require('./index')

test('first ever ci test', function () {
  expect(index.square(5)).toBe(25)
})