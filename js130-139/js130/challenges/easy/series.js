// 10: Series

class Series {
  constructor(numStr) {
    this.numStr = numStr;
  }

  slices(sliceLength) {
    if (sliceLength > this.numStr.length)
      throw new Error("Invalid slice length");

    let result = [];
    let slice = [];
    let l = 0;
    for (let r = 0; r < this.numStr.length; r++) {
      let number = Number(this.numStr[r]);
      slice.push(number);
      if (r - l + 1 === sliceLength) {
        result.push(slice.slice());
        slice.shift();
        l++;
      }
    }

    return result;
  }
}

module.exports = Series;
