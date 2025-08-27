// 3: Clock

class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  mod(n, d = 1440) {
    return ((n % d) + d) % d;
  }

  calculateTime(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes - hours * 60;
    return [hours, minutes];
  }

  add(minutes) {
    let totalMinutes = this.hours * 60 + this.minutes;
    totalMinutes = this.mod(totalMinutes + minutes);

    let [clockHours, clockMinutes] = this.calculateTime(totalMinutes);
    return new Clock(clockHours, clockMinutes);
  }

  subtract(minutes) {
    let totalMinutes = this.hours * 60 + this.minutes;
    totalMinutes = this.mod(totalMinutes - minutes);

    let [clockHours, clockMinutes] = this.calculateTime(totalMinutes);
    return new Clock(clockHours, clockMinutes);
  }

  toString() {
    let hours = String(this.hours).padStart(2, "0");
    let minutes = String(this.minutes).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  isEqual(clockObj) {
    return this.hours === clockObj.hours && this.minutes === clockObj.minutes;
  }
}

module.exports = Clock;
