/*
    利用Stack进行进制转换
    ----------------------
    十进制转换二进制 233 -> 11101001
    将10一直除2取余数，，每轮的余数入栈
    ----------------------
    十进制转换任何基数为2-36进制
*/
const { Stack } = require("./stack-obj");
function decimalToBinary(decimalNum) {
  if (typeof decimalNum !== "number") return false;
  const remStack = new Stack();
  let rem; //保存每轮的余数
  while (decimalNum > 0) {
    rem = decimalNum % 2;
    decimalNum = Math.floor(decimalNum / 2);
    remStack.push(rem);
  }
  let binStr = remStack.toString().split(",").reverse().join("");
  return binStr;
}

function baseConverter(decNum, base) {
  if (typeof decNum !== "number" || !(base >= 2 && base <= 36)) {
    return false;
  }
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const remStack = new Stack();
  let rem;
  while (decNum > 0) {
    rem = decNum % base;
    decNum = Math.floor(decNum / base);
    remStack.push(rem);
  }
  let baseArr = remStack.toString().split(",").reverse();
  let baseStr = baseArr.map((digit) => digits[+digit]).join("");
  return baseStr;
}

// console.log(decimalToBinary(10));
// console.log(decimalToBinary(233));
console.log(baseConverter(65535, 16));
