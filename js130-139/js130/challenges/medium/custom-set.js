// 6: Custom Set

class CustomSet {
  constructor(arr = []) {
    this.set = arr;
  }

  getLength() {
    return this.set.length;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(otherSet) {
    return this.set.every((element) => otherSet.contains(element));
  }

  isDisjoint(otherSet) {
    return this.set.every((element) => !otherSet.contains(element));
  }

  isSame(otherSet) {
    if (this.getLength() !== otherSet.getLength()) {
      return false;
    }
    return this.isSubset(otherSet);
  }

  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
    }
    return this;
  }

  intersection(otherSet) {
    let sameElements = this.set.filter((element) => otherSet.contains(element));
    return new CustomSet(sameElements);
  }

  difference(otherSet) {
    let differentElements = this.set.filter(
      (element) => !otherSet.contains(element)
    );
    return new CustomSet(differentElements);
  }

  union(otherSet) {
    otherSet.set.forEach((element) => this.add(element));
    return new CustomSet(this.set);
  }
}

module.exports = CustomSet;
