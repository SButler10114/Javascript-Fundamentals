//Fat Arrow function

let fatArrow = () => {
    console.log('I reside in the NEW way of writing functions.')
}

fatArrow();

// Consise body only allows single statement in the function body;

let consiseBody = () => console.log('I am consise');

consiseBody();

//Block body allows for multiple statements
const blockBody = () => {
    let y = 0;
    y += 4;
    console.log(y);
}
blockBody();

