function foo(x) {
  if (x === null) {
    return 0;
  } else if (x <= 1) {
    return x; //Simplified base cases
  }

  let a = 0, b = 1, temp;
  for (let i = 2; i <= x; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(foo(5)); // Works correctly even for large x
console.log(foo(0)); //This will return 0
console.log(foo(null)); //This will return 0
console.log(foo(1)); //This will return 1
console.log(foo(2)); //This will return 1