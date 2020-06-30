/*let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 56,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

function createPerson (name, age, canVote) {
    let person = {
        name: name,
        age: age,
        canVote: canVote
    }
    return person;
}
*/

// Instances of a person object
function Person (name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

let person1 = new Person('Macy', 24, true);

console.log(person1);


function Array(item1, item2, item3, ...) {
    this.items = {
        o: item1,
        1: item2,
        3: item3,
    }
}