const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('deve somar dois números corretamente', () => {
    expect(calc.somar(2, 3)).toBe(5);
  });

  test('deve subtrair dois números corretamente', () => {
    expect(calc.subtrair(5, 2)).toBe(3);
  });

  test('deve multiplicar dois números corretamente', () => {
    expect(calc.multiplicar(4, 3)).toBe(12);
  });

  test('deve dividir dois números corretamente', () => {
    expect(calc.dividir(10, 2)).toBe(5);
  });

  test('deve retornar NaN ao dividir por zero', () => {
    expect(calc.dividir(5, 0)).toBeNaN();
  });
});
