// id, firstName, lastName, age
const persons = [];
let inputData = prompt('Enter person data separated by ","');
while (inputData) {
//TODO - Create person from inputData
//TODO - Add only unique persons
    let separatedData = inputData.split(',');

    // Creating new Person
    let person = new Person();
    separatedData.forEach((d, i) => {
        // Putting data to the fields
        switch (i) {
            case 0:
                person.id = d;
            case 1:
                person.firstName = d;
            case 2:
                person.lastName = d;
            case 3:
                person.age = d;
        }
    })
    // Check for unique id
    let check = true;
    persons.forEach((p) => {
        if (p.id === person.id) {
            alert("Person with this id already exists");
            check = false;
        }
    });

    // Adding person at the end of array if check is true
    if (check) {
        persons.push(person);
    }
    // New prompt from user
    inputData = prompt('Add one more person:');
}

printPersons(persons);
printStats(persons);

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    };
}

function printPersons(persons) {
    persons.forEach((p, i) => console.log(`${i + 1}) id = ${p.id} || ${p.fullName()}`));
}

function printStats(persons) {
    // Getting new array from age field
    let ages = persons.map((item) => Number(item.age));
    const avg = ages.reduce((acc, p) => acc + p) / ages.length;
    console.log(`Min age = ${Math.min(...ages)}`);
    console.log(`Max age = ${Math.max(...ages)}`);
    console.log(`Avg age = ${avg.toFixed(1)}`);
}