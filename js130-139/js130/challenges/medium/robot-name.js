// 2: Robot Name

class Robot {
  static UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static DIGITS = "0123456789";
  static NAMES = {};

  constructor() {
    this.robotName = this.createRobotName();
    while (this.robotName in Robot.NAMES) {
      this.robotName = this.createRobotName();
    }
    Robot.NAMES[this.robotName] = null;
  }

  getRandomChar(collection) {
    let randomIdx = Math.floor(Math.random() * collection.length);
    return collection[randomIdx];
  }

  createRobotName() {
    let robotName = "";
    for (let i = 0; i < 2; i++) {
      robotName += this.getRandomChar(Robot.UPPERCASE);
    }
    for (let i = 0; i < 3; i++) {
      robotName += this.getRandomChar(Robot.DIGITS);
    }
    return robotName;
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = null;
  }
}

module.exports = Robot;
