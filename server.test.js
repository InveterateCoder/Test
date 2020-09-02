const request = require('supertest')
const server = require('./server')

describe('Example web app', function () {
  test('should square numbers', function (done) {
    request(server)
      .get('/square/4')
      .expect(200)
      .expect("16", done)
  })
  test('should return a 500 for invalid square requests', function (done) {
    request(server)
      .get('/square')
      .expect(500, done)
  })
  afterAll(function () {
    server.close()
  })
})