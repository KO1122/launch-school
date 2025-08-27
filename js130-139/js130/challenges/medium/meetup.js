// 4: Meetups

const DAYS_OF_WEEK = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const DESCRIPTORS = {
  first: 1,
  second: 8,
  third: 15,
  fourth: 22,
  fifth: 29,
  last: null,
  teenth: 13,
};

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
  }

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();

    let firstDay = DESCRIPTORS[schedule] || this.daysInMonth - 6;
    let lastDay = Math.min(this.daysInMonth, firstDay + 6);

    for (let day = firstDay; day <= lastDay; day++) {
      let date = new Date(this.year, this.month - 1, day);

      if (date.getDay() === DAYS_OF_WEEK[weekday]) {
        return date;
      }
    }

    return null;
  }
}

module.exports = Meetup;
