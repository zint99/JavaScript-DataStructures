function reverseNumberStr(numberStr) {
  if (numberStr.length === 1) return numberStr
  return (
    numberStr[numberStr.length - 1] +
    reverseNumberStr(numberStr.slice(0, numberStr.length - 1))
  )
}

console.log("reverseNumberStr('12345')", reverseNumberStr("12345"))
