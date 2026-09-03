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
    if (n2 === 0) {
      throw new Error("Não é possível dividir por zero");
    }

    return n1 / n2;
  }

}

module.exports = Calculator;
