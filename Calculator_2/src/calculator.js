class Calculator {
  somar(n1, n2) {
    return n1 + n2;
  }

  subtrair(n1, n2) {
    return n1 - n2;
  }

  multiplicar(n1, n2) {
    return n1 * n2;
  }

  dividir(n1, n2) {
    return n2 !== 0 ? n1 / n2 : NaN;
  }
}

module.exports = Calculator;
