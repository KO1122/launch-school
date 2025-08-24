function createFruit(name, color) {
  return {
    name,
    color,

    isRipe: function () {
      return `This ${this.name} is ripe.`;
    },

    describe: function () {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}
