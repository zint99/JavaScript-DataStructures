Array.prototype.myShift = function () {
  const shiftItem = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.pop();
  return shiftItem;
};

const arr = [1, 2, 3];
arr.myShift();
console.log(arr);
