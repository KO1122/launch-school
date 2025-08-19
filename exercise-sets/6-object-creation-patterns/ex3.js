class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = [];
  }

  put(obj) {
    if (this.buffer.length + 1 > this.size) {
      this.buffer.shift();
    }
    this.buffer.push(obj);
  }

  get() {
    if (this.buffer.length === 0) return null;
    return this.buffer.shift();
  }
}

let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

buffer.put(1);
buffer.put(2);
console.log(buffer.get() === 1);

buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);

buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);
console.log(buffer.get() === 6);
console.log(buffer.get() === 7);
console.log(buffer.get() === null);

let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1);
anotherbuffer.put(2);
console.log(anotherbuffer.get() === 1);

anotherbuffer.put(3);
anotherbuffer.put(4);
console.log(anotherbuffer.get() === 2);

anotherbuffer.put(5);
anotherbuffer.put(6);
anotherbuffer.put(7);
console.log(anotherbuffer.get() === 4);
console.log(anotherbuffer.get() === 5);
console.log(anotherbuffer.get() === 6);
console.log(anotherbuffer.get() === 7);
console.log(anotherbuffer.get() === null);
