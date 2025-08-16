function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    getDescription: function () {
      return `${this.title} was written by ${this.author}. I have${
        this.read ? "" : "n't"
      } read it`;
    },
    readBook: function () {
      this.read = true;
    },
  };
}

let book1 = createBook("Mythos", "Stephen Fry");
console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.
