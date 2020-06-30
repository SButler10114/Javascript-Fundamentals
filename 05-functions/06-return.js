let returnToSender = () => {
    let running = () => 'not here'
    return running
}

let value = returnToSender();

console.log(value);

let what = () => returnToSender();

let  hmmm = what ();

console.log(hmmm);

function whatCanIDo() {
    return 6;
}