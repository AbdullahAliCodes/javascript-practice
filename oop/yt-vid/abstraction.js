class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        this.job = "";
    }
    getName = () => {
        return this.name;
    }
    getAge = () => {
        return this.age;
    }

    setJob = (job) => {
        this.job = job;
    }
}

class House {
    constructor(address, price, residents = []) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () => {
        return this.address;
    };
    getPrice = () => {
        return this.price;
    };

    getResidents = () => {
        return this.residents;
    };

    addResident = (resident) => {
        this.residents.push(resident);
    }
}

let Pedro = new Person("Pedro", 19);
let house = new House("81 Joha Street", 20000000, [] );
Pedro.setJob("Developer");
house.addResident(Pedro);
console.log(house.getResidents());
