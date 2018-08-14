export default class Pantry {
  constructor() {
    this.stock = {}
  }

  stockCheck(item) {
    return this.stock[item] ? this.stock[item] : 0;
  }

  restock(item, amount) {
    this.stock[item] ? this.stock[item] += amount : this.stock[item] = amount;
  }
}
