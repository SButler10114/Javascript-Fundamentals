let i = 7;

//For loop controller ie: (
//pos1: Variable declaration and/or initialization
//pos2: Condition to run the loop (needs to be true)
//pos3: Incrementation or change


for (i = 0; i <10; i++) {
    console.log('nice');
    // increment i
    //verify conditional (hop up if true, leave loop if false)
}

let a = [];

for (let a = 0; a <= 20; a = a += 2) {
    console.log(a)
} 

console.log(a); // 0, null, undefined, error, []

// count from 10 to 0

for (let z = 10; z >= 0; z--){
    console.log(z);
}

let z = 10;
for (z = 10; z >= 0; z--) {
    console.log(z);
}
console.log(z);

let name = 'PatrickStarrIsReallyCoolIWouldLikeToLi';
let pCharacter = name[name.length - 1];
console.log(pCharacter);

//challenge:
//Use a for loop, create a name variable, console log each character individually

let challenge = 'Sierra';

challenge[1]
challenge[2]
challenge[3]

for (let x=0; x < challenge.length; x++) {
    console.log(challenge[x]);
}

for (let c of challenge) {
    console.log(c);
}

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
}

console.log(total);

