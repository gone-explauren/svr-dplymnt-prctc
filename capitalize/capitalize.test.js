// dependency injection / importing
const capitalize = require('./capitalize.js');

describe('As a User I want a way to capitalize my strings', () => {

  // our unit test
  test('Should capitalize a string', () => {
    let output = capitalize('laurel');
    expect(output).toEqual('LAUREL');
  });
});