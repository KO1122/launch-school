function createSmartphone(brand, model, releaseYear) {
  return {
    brand,
    model,
    releaseYear,

    checkBatteryLevel: function () {
      return `${this.brand} ${this.model} has 75% battery remaining.`;
    },

    displayInfo: function () {
      return `${this.releaseYear} ${this.brand} ${this.model}`;
    },
  };
}
