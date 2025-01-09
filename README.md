# JavaScript Stack Overflow Error

This repository demonstrates a common error in JavaScript: stack overflow errors caused by excessively deep recursion.

The `bug.js` file contains a recursive function (`foo`) that calculates a Fibonacci-like sequence.  For small input values, the function works correctly. However, as the input value (`x`) increases, the number of recursive calls explodes, quickly exceeding the JavaScript engine's call stack limit, resulting in a stack overflow error.

The `bugSolution.js` file provides a solution using iteration instead of recursion, avoiding the stack overflow issue.

This example highlights the importance of carefully considering recursion depth and using iterative approaches for tasks that may involve a large number of recursive calls.