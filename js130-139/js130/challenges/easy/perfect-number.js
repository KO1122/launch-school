// 6: Perfect Number

class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new Error("Negative numbers not allowed");
    let sum = this.getAliquotSum(num);
    if (sum === num) {
      return "perfect";
    } else if (sum < num) {
      return "deficient";
    }
    return "abundant";
  }

  static getAliquotSum(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

module.exports = PerfectNumber;
