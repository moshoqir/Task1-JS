// program to print the text
// variable a cannot be used here
// function greet() {
//   let a = "hello";

//   // variable b cannot be used here
//   if (a == "hello") {
//     // variable b can be used here
//     let b = "world";
//     console.log(a + " " + b);
//   }

//   // variable b cannot be used here
//   console.log(a + " " + b); // error
// }
// // variable a cannot be used here

// greet();

//  (لانو انا اصلاً بستدعي الفنكشن)المثال هون .... المتغير اللي بالفنكشن الخارجيه رح يتعرف على المتغير لما نطلع برا الفكنشن

// بينما لما نعمل فنكشن جوا الفنكشن ونطلع منها, ما رح يتعرف على المتغير الداخلي

// var الحل انو نعملو

function greet() {
  let a = "hello";

  // variable b cannot be used here
  if (a == "hello") {
    // variable b can be used here
    var b = "world";
    console.log(a + " " + b);
  }

  console.log(a + " " + b); //
}

greet();

console.log("********var example**********");
var a = 5;
console.log(a); // 5
{
  var a = 3;
  console.log(a); // 3
}
console.log(a); // 3

// بتعرف على اللي جوا البلوك varهون رح يطبع 3 لانو

console.log("********let example**********");
var a = 5;
console.log(a); // 5
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 5

// ما بتعرف على اللي جوا البلوك  let رح يطبع 5 لانو

console.log("********let example (Hoisting)**********");

console.log(aa);
var aa = 9; // undefined (not an error)

console.log("********var example (Hoisting)**********");

// console.log(aaa);
// let aaa = 9; //  notes.js:70  Uncaught ReferenceError: Cannot access 'aaa' before initialization

var d = new Date();

console.log(d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear());
