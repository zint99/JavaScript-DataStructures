// 使用双端队列，检查字符串是否为回文
const { Deque } = require("./deque");

function palindromeChecker(str) {
  if (typeof str !== "string" || str.length === 0) return false; //合法字符串检查
  str = str.toLowerCase().split(" ").join(""); //转换大小写并去除包括中间的所有空行
  const dq = new Deque();
  Array.prototype.forEach.call(str, (char) => {
    dq.addBack(char);
  }); //将所有字符放入DQ
  let isEqual = true;
  let firstChar, lastChar; //初始化判断结果和声明队列首尾字符变量
  if (dq.size() === 1) {
    isEqual = true; //如果字符串只有一个字符肯定为回文
  }
  while (dq.size() > 1) {
    firstChar = dq.removeFront();
    lastChar = dq.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log(`字符串asd是否为回文:${palindromeChecker("asd")}`);
console.log(`字符串psnhdwq是否为回文:${palindromeChecker("psnhdwq")}`);
console.log(`字符串a是否为回文:${palindromeChecker("a")}`);
console.log(`字符串88是否为回文:${palindromeChecker("88")}`);
console.log(
  `字符串Step on no pets是否为回文:${palindromeChecker("Step on no pets")}`
);
