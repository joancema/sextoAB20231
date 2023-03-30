class Person {
    constructor(firstName, lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
}


const personExample =  new Person("Pedro","Pihuave");

const fullName = personExample.getFullName();


console.log(fullName);