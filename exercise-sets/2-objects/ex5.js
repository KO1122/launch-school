function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info: function () {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse: function (course) {
      this.courses.push(course);
    },
    listCourses: function (course) {
      console.log(this.courses);
    },
    addNote: function (code, note) {
      let course = this.courses.filter((course) => course.code === code)[0];
      if (course && course.note) {
        course.note += `; ${note}`;
      } else {
        course.note = `${course.name}: ${note}`;
      }
    },
    updateNote: function (code, note) {
      let course = this.courses.filter((course) => course.code === code)[0];
      if (course && course.note) {
        course.note = `${course.name}: ${note}`;
      }
    },
    viewNotes: function () {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(course.note);
        }
      });
    },
  };
}

const YEARS = ["1st", "2nd", "3rd", "4th", "5th"];
let school = {
  students: [],
  addStudent() {},
  enrollStudent() {},
  addGrade() {},
  getReportCard() {},
  courseReport() {},
};

let paul = createStudent("Paul", "3rd");
let mary = createStudent("Mary", "1st");
let kim = createStudent("Kim", "2nd");
console.log(paul);
console.log(mary);
console.log(kim);

school.getReportCard(paul);
school.courseReport("Math");
school.courseReport("Advanced Math");
school.courseReport("Physics");
