class SortedList {
  constructor(item, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.length = this.items.push(item);
    // this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(index) {
    if (index < this.length) return this.items[index]
    else throw new Error('OutOfBounds');
  }
  max() {

  }
  min() {

  }
  avg() {


  }

  sum() {

  }

};

module.exports = SortedList;
