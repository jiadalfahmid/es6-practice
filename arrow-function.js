// normal function

function aFunction() {
  console.log("simple function");
}
aFunction();

// We can write an arrow function like a variable
// variable-type functionName = (parameters) => {function body};
// If an arrow written in one line then it returns by itself.
const bFunction = () => "arrow function";
console.log(bFunction());

// multiline arrow
// we need to return manually on this case.
const cFunction = () => {
  return console.log("multiline arrow");
};
cFunction();
