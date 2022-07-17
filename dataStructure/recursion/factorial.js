function factorail(n) {
  if (n < 2) return 1
  return n * factorail(n - 1)
}
console.log("factorail(1)", factorail(1))
console.log("factorail(3)", factorail(3))
console.log("factorail(5)", factorail(5))
