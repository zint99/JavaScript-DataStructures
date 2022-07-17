function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 2) + fibonacci(n - 1)
}
console.log("fibonacci(3)", fibonacci(3))
console.log("fibonacci(4)", fibonacci(4))
console.log("fibonacci(5)", fibonacci(5))
