class Person {
    // the underscore is for encapsulation. _is cannot be accessed
    constructor(id, name, age, email, subjects) {
        this._id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    showDetails() {
        console.log(`
        ID: ${this.id}
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        `)
    }
}

class Student extends Person {
    constructor(id, name, age, email, subjects) {
        super(id, name, age, email);
        this.subjects = subjects;
    } 

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects)
    }

    showDetails() {
        console.log(`${this.name} is a student`);
        super.showDetails();        
        console.log(`Subjects: ${this.subjects}`);
    }
}

// extends is Inheritance
class Teacher extends Person {
    constructor(id, name, age, email, subjects) {
        // Polymorphism
        super(id, name, age, email);
        this.subjects = subjects;
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects)
    }
}

class Parent extends Person {
    constructor(id, name, age, email) {
        super(id, name, age, email);
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
        console.log(this.subjects)
    }
}



const dullz = new Student(1, "dullz", 24, "yoyo@gmail.com", ["Math", "Bio"]);

dullz.id = 2;
console.log(dullz.id)
// dullz.showDetails();

const parent = new Parent(1, "Bobby", 55, "parent@gmail.com");
// parent.showDetails();

// dullz.addSubject("Geos")
// const joe = new Student(2, "Joe", 23, ["Math", "Chem"]);



// console.log(dullz);