const { defaultToString } = require("../util/defaultToString")

/*
❑ set(key, value)：向字典中添加新元素。如果key已经存在，那么已存在的value会被新的值覆盖。
    * 对key,value进行有效判断
❑ remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。
❑ hasKey(key)：如果某个键值存在于该字典中，返回true，否则返回false。
    * 如果Key不存在，则this.table[key]是undefined
❑ get(key)：通过以键值作为参数查找特定的数值并返回。
    * 没有返回undefined
    * 先获取valuePair后判断是更高效的方法
❑ clear()：删除该字典中的所有值。
❑ size()：返回字典所包含值的数量。与数组的length属性类似。
❑ isEmpty()：在size等于零的时候返回true，否则返回false。
❑ keys()：将字典所包含的所有键名以数组形式返回。
❑ values()：将字典所包含的所有数值以数组形式返回。
❑ keyValues()：将字典中所有[键，值]对返回。
❑ forEach(callbackFn)：迭代字典中所有的键值对。callbackFn有两个参数：key和value。该方法可以在回调函数返回false时被中止（和Array类中的every方法相似）。
    * 回调返回false时终止
*/

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn //将key字符串化
    this.table = {}
  }
  #ValuePair = class {
    constructor(key, value) {
      this.key = key
      this.value = value
    }
    toString() {
      return `[#${this.key}: ${this.value}]`
    }
  }
  hasKey(key) {
    const tableKey = this.toStrFn(key)
    return this.table[tableKey] != null
  }
  set(key, value) {
    if (key == null || value == null) return false
    const tableKey = this.toStrFn(key)
    this.table[tableKey] = new this.#ValuePair(key, value)
    return true
  }
  remove(key) {
    const tableKey = this.toStrFn(key)
    if (this.hasKey(tableKey)) {
      delete this.table[tableKey]
      return truue
    }
    return false
  }
  get(key) {
    const tableKey = this.toStrFn(key)
    const valuePair = this.table[tableKey]
    return valuePair == null ? undefined : valuePair.value
  }
  keyValues() {
    return Object.values(this.table)
  }
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key)
  }
  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.table = {}
  }
  forEach(cb) {
    for (let i = 0; i < this.keyValues().length; i++) {
      const { key, value } = this.keyValues()[i]
      const result = cb(key, value)
      if (result === false) {
        break
      }
    }
  }
  toString() {
    if (this.isEmpty()) return ""
    const valuePairs = this.keyValues()
    let objStr = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objStr += `,${valuePairs[i].toString()}`
    }
    return objStr
  }
}

const dict = new Dictionary()
console.log(dict.set("新裤子", "生活因你而火热"))
console.log(dict.toString())
console.log(dict.toStrFn)
