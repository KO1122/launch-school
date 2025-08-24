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

let foo = createStudent("Foo", "1st");
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: "Math", code: 101 });
foo.addCourse({ name: "Advanced Math", code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, "Fun course");
foo.addNote(101, "Remember to study for algebra");
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, "Difficult subject");
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, "Fun course");
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
