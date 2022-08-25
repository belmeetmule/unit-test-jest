const charCount = require('./modules/charCount');

test('count number of chars to be 4', () => {
    expect(charCount('hello')).toBeGreaterThan(0);
    expect(charCount('test test ')).toBeLessThan(11);
  });
