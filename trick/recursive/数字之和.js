function add(n) {
  return n === 1 ? 1 : n + add(n - 1)
}

console.log("add(100)", add(100))
