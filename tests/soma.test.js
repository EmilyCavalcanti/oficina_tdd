const soma = require('../src/soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(2,2)).toBe(4)
  })
})