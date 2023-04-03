function sum(num1, num2, num3, num4, num5) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)|| isNaN(num5)) {
      throw "Não é um número";
    }
    return num1 + num2 + num3 + num4 + num5;
  }
  module.exports = {
    sum,
  };