function student(id, name, age, subjects) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.subjects = subjects;
}

const dullz = new student(1, "dullz", 24, ["Math"]);
const joe = new student(2, "Joe", 23, ["Math", "Chem"]);

console.log(dullz, joe);