
// Global scope
const x = 30;
console.log(x);

if (x) {
   console.log(x);
}

function print() {
   console.log(x);
}

// Block scope
// It can't be find outside of the block
{
   let y = 5;
   console.log(y);
}


// Function scope

function show(){
   const z = 93;
   console.log(z);
}
show()