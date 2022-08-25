
const reverseString = require('./modules/example2.js');

test ('reverse str', () => {
    expect(reverseString('abc')).toBe('cba')
})