

// GIVEN
console.log(example);
let example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// 1)

console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = "world";


// 2)

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle
// needle = 'haystack'
// needle = 'magnet'
// console.log(needle); / logs magnet;
// needle = 'haystack'


// 3)

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan
// brendan = 'super cool'
// console.log(brendan); // logs 'super cool';
// function never called

// 4)

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food
// food = 'chicken'
// console.log(food); // logs 'chicken';
// food = 'half-chicken'
// console.log(food); // logs 'half-chicken';
// food = 'gone'
// food = 'chicken'


// 5)

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// ERROR mean is not a function



// 6)

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre
// console.log(genre); // logs 'undefined';
// genre = 'disco'
// genre = 'rock'
// console.log(genre); // logs 'rock';
// genre = 'r&b'
// console.log(genre); // logs 'r&b';
// genre = 'disco'
// console.log(genre); // logs 'disco';




// 7)

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// dojo = 'san jose';
// console.log(dojo); // logs 'san jose';
// dojo = 'seattle'
// console.log(dojo); // logs 'seattle';
// dojo = 'burbank'
// console.log(dojo); // logs 'burbank';
// dojo = 'san jose'
// console.log(dojo); // logs 'san jose';



// 8) - Bonus ES6: const

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// const dojo
// dojo = {name: 'chicago'}
// dojo = {name: 'chicago'}, students:65}
// dojo = {name: 'chicago'}, students:65}, hiring: true}
// console.log(makeDojo("Chicago", 65)); // logs {name: 'chicago', students:65, hiring: true}
// dojo = {name: 'berkeley'}
// dojo = {name: 'berkeley'}, students:0}
// ERROR const cannot be reassigned


