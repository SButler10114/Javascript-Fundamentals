// get the area of a rectangle
// len * width
// area = x * y
function areaOfASquare(length){
    return length ** 2;
}
console.log(areaOfASquare(5));

//Parameters
function areaOfRectangle(length, width) {
    area = length * width;
    return area;
}
let area_Rectangle_1 = areaOfRectangle(200,5);

// area of a cube length * width * height

function areaOfCube(length, width, height){
    area = length * width * height;
    return area;
}
length = ("give me a length"); // Us asking user for input
area = areaOfCube(5, 5, 5);// runing our function
console.log('A cube with a height of 5 inches and 5 inches wide and 5 inches long with a volume of ${areaOfCube(5, 5, 5');

sandbox = areaOfRectangle(6, 15);
console.log(sandbox);


// Given celsius return farenheit
// (c x 9/5) + 32
function CelToFarh(Celsius){
    Farenheit = (Celsius * 9/5) + 32;
    return Farenheit;
}
console.log(CelToFarh(0));


