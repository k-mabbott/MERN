
Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
    }


// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {    
//             return false;
//         }
//     }
//     return true;
//     }


const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// recursive
// function rFib( n ) {
//         if ( n < 2 ) {
//             return n;
//         }
//         return rFib( n-1 ) + rFib( n-2 );
//     }
// rFib(40);
//     // iterative ---------------------------Much Faster
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// iFib(40);



const quickSort = (arr) =>{
    if (arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    let start = [];
    let end = [];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            start.push(arr[i]);
        }
        else{
            end.push(arr[i]);
        }
    }
    return [...quickSort(start), pivot, ...quickSort(end)];
}

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

console.log(quickSort(items, 0, items.length - 1));




let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
console.log(quickSort(myArray)); // Output: [1,2,3,4,5,6,7,8]




// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// // const reversed1 = story.split("").reverse().join("");
// function rev(str){
//     let newStr = ''
//     for (let i = str.length-1; i >= 0 ;i-- ) {
//         newStr += str[i]
//     }
//     return newStr;
// }
// console.log(rev(story))



// const assert = require('assert');

// function add(num1, num2) {
//     return num1 + num2;
// }
 
// assert.strictEqual(add(2, 2), 4);
// assert.strictEqual(add(4, 6), 10);

// // add.spec.js
// const { add } = require('./funcs');
 
// describe('add', () => {
//     test('correctly returns the sum of two numbers', () => {
//         expect(add(2, 2)).toBe(4);
//         expect(add(4, 6)).toBe(10); 
//     });
// });















