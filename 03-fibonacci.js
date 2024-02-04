const fibonacci_sum = (n) => {
  if (n === 0) return 0
  let prev = 0
  let next = 1
  let current

  for (let i = 0; i < n; i++){
    current = prev + next
    prev = next
    next = current
  }

  return current
}

const fibonacci_pos = (n) => {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]
  const sequence = [0, 1]
  let prev = 0
  let next = 1
  for (let i = 0; i < n - 1; i++) {
    current = prev + next
    prev = next
    next = current
    sequence.push(current)
  }
  return sequence.at(-1)
}

const fibonacci_sequence = (n) => {
  const fib = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}

const fibonacciRecursive = (n) => {
  if (n < 2) {
      return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacci(num) {
  if(num < 2) {
      return num;
  }
  else {
      return fibonacci(num-1) + fibonacci(num - 2);
  }
}

function fibonacciMemoization(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}


console.log(fibonacci_sequence(7))
console.log(fibonacci_sum(7))
console.log(fibonacci_pos(7))
console.log(fibonacciRecursive(7))
console.log(fibonacci(7))
console.log(fibonacciMemoization(7))

