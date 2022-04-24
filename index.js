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
    throw new Error('OutOfBounds');
  }
  max() {
    if (this.length == 0) throw new Error('EmptySortedList');
    else return this.items[1];
  }
  min() {
    if (this.length == 0) throw new Error('EmptySortedList');
    else return this.items[0];
  }
  avg() {


  }

  sum() {

  }

};

module.exports = SortedList;
