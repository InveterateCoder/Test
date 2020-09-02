const index = require('./index')

describe('Amazing mathematical operations', function () {
    test('should square numbers', function () {
        expect(index.square(4)).toStrictEqual(16)
    })
    test('should run a callback after a delay', function (done) {
        index.randomTimeout(function () {
            expect(true).toBeTruthy()
            done()
        })
    })
})