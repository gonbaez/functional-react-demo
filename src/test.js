// pure function
function add(a, b) {
  return a + b;
}

// promiscuous function
const x = 10;
const y = 20;

function add2() {
  return x + y;
}

// To test line 11 you need to know what x and y are somewhere else.

// It also works the other way around.
let answer;

function add2(x, y) {
  answer = x + y;
}
