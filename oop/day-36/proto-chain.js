function Student(id, name, age, subjects) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.subjects = subjects;
}

const dullz = new Student(1, "dullz", 24, ["Math"]);
const joe = new Student(2, "Joe", 23, ["Math", "Chem"]);

Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
}

dullz.addSubject("Bio")

console.log(dullz, joe);