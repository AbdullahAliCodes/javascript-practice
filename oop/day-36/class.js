class Student {
    constructor(id, name, age, subjects) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects)
    }
}


const dullz = new Student(1, "dullz", 24, ["Math"]);
const joe = new Student(2, "Joe", 23, ["Math", "Chem"]);

dullz.addSubject("Geos")

// console.log(dullz);