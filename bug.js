function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === 0) {
    return 1;
  } else {
    return foo(x - 1) + foo(x - 2);
  }
}

console.log(foo(5)); //This will cause a stack overflow error for larger values of x
console.log(foo(0)); //This will return 1
console.log(foo(null)); //This will return 0
console.log(foo(1)); //This will return 1
console.log(foo(2)); //This will return 1