

// FOR ALPHA
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();


// FOR NUMBERS
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points)


const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

// FOR OBJECTS 
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);
console.log(sortedGroceries)

//  Iterates through list and outputs all items in HTML list items 
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList1 = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList1)

// Logs all foods that have an 'o' in the name
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods)

//  iterates through array and logs all values cubed
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes)

//  only logs even #'s
const evens = values.filter( val => val % 2 === 0 );
console.log(evens)

//  only logs odd cubed #'s
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes)
