// 2: Point Mutations

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparison) {
    let length1 = this.strand.length;
    let length2 = comparison.length;
    let shorterLength = length1 < length2 ? length1 : length2;
    let mutationCnt = 0;
    for (let i = 0; i < shorterLength; i++) {
      if (this.strand[i] !== comparison[i]) {
        mutationCnt++;
      }
    }
    return mutationCnt;
  }
}

module.exports = DNA;
