const { Node } = require("./linked-list-models");

class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}
module.exports = {
  DoublyNode,
};
