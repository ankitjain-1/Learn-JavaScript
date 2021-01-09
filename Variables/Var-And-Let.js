
// Var hoisting - variables that are declared using var can be used before initialization that is called var hoisting.
// Example
varr = "varr"      // initialization before declaring
console.log(varr); 
var varr;

//* In the case of let this will not work
//  TODO: uncomment these line of code
// lett = "lett";  //! this will throw a reference error
// console.log(lett);
// let lett;

// *Declaring and initializing two variables
// var a = 0, b = 0;

// var a = "A";
// var b = a;
// console.log(a, b);

// var a = "A", b = a;
// console.log(a, b);

// var a, b = 'A';
// console.log(a, b);

// var a, b = a = 'A';
// console.log(a, b);

var a = 0;
function f() {
  var a = a1 = 1; // Declares x locally; declares y globally.
}
f();

console.log(a, a1); // 0 1