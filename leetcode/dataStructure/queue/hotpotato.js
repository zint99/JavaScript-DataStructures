/*
    使用循环队列来解决击鼓传花问题
    思路：将出列的元素再重复入列，指定击鼓传花的次数，迭代这个过程，最后队列头部的元素被淘汰，直到队列只剩最后一人就是胜利者
    0 / 2 3 4 5 1
    1 / 3 4 5 1 2
    2 / 4 5 1 2 3
    3 / 5 1 2 3 4
    4 / 1 2 3 4 5
    5 / 2 3 4 5 1
    6 / 3 4 5 1 2
*/
const { Queue } = require("./queue");

function hotPotato(list, num) {
  const q = new Queue();
  const elimitatedList = []; //被淘汰的人
  list.forEach((person) => q.enqueue(person));
  while (q.size() !== 1) {
    for (let i = 0; i < num; i++) {
      const result = q.dequeue();
      q.enqueue(result);
    }
    const elimitatedPerson = q.dequeue();
    elimitatedList.push(elimitatedPerson);
  }
  return {
    elimitated: elimitatedList,
    winner: q.peek(),
  };
}
const gamer = ["赵", "钱", "孙", "李", "王"];
const loop = 3;
const { elimitated, winner } = hotPotato(gamer, loop);
elimitated.forEach((name) => {
  console.log(`本轮淘汰：${name}`);
});
console.log(`最后获胜者：${winner}`);
