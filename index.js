function square(a) {
    return a * a;
}
function randomTimeout(cb) {
    setTimeout(cb, Math.random() * 500)
}

module.exports = {
    square, randomTimeout
}