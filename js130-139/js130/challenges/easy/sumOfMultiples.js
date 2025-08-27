// 8: Sum of Multiples

class SumOfMultiples {
  constructor(...numbers) {
    this.numbers = numbers.length > 0 ? numbers : [3, 5];
  }

  anyMultiple(multiple) {
    return this.numbers.some((number) => multiple % number === 0);
  }

  to(target) {
    let sum = 0;
    for (let i = 1; i < target; i++) {
      if (this.anyMultiple(i)) {
        sum += i;
      }
    }
    return sum;
  }

  static to(target) {
    return new SumOfMultiples().to(target);
  }
}

module.exports = SumOfMultiples;
