/*
    数组在头部插入新元素
    原数组长度加1，再将原数组的每一位置上的value像后移动一位
    新插入的元素放入数组第一个位置
*/

Array.prototype.myUnshift = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  return this.length;
};

const arr = [1, 2];
console.log(arr.myUnshift(0));
console.log(arr);
