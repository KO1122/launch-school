const Todo = require("./todo");
const TodoList = require("./todolist");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  // 1. size
  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  // 2. toArray
  test("calling toArray returns the list in array form", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  // 3. first
  test("calling first returns the first todo in list", () => {
    expect(list.first()).toEqual(todo1);
  });

  // 4. last
  test("calling last returns the last todo in list", () => {
    expect(list.last()).toEqual(todo3);
  });

  // 5. shift
  test("calling shift removes and returns the first item in the list", () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  // 6. pop
  test("calling pop removes and returns the last item in the list", () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  // 7. isDone
  test("isDone() returns true if all items in the list are done, false otherwise", () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  // 8. add
  test("add() adds an item to the list, but throws a TypeError if the item isn't a Todo object", () => {
    let todo4 = new Todo("Buy eggs");
    list.add(todo4);
    expect(list.toArray()).toEqual([todo1, todo2, todo3, todo4]);
    expect(() => list.add("Wrong value")).toThrow(TypeError);
  });

  // 9. itemAt
  test("itemAt() returns the item at a given index. It raises a ReferenceError if the index is not in bounds", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(10)).toThrow(ReferenceError);
  });

  // 10. markDoneAt
  test("markDoneAt() marks the item at a given index as being done. It raises a ReferenceError if the index is not in bounds", () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(() => list.markDoneAt(10)).toThrow(ReferenceError);
  });

  // 11. markUndoneAt
  test("markUndoneAt() marks the item at a given index as being undone. It raises a ReferenceError if the index is not in bounds", () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
    expect(() => list.markUndoneAt(10)).toThrow(ReferenceError);
  });

  // 12. markAllDone
  test("markAllDone() marks all items as being done", () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  // 13. removeAt
  test("removeAt() removes an item at a given index and returns an array with the removed item. It raises a ReferenceError if the index is not in bounds", () => {
    let todo = list.removeAt(0);
    expect(todo).toEqual([todo1]);
    expect(list.toArray()).toEqual([todo2, todo3]);
    expect(() => list.removeAt(100)).toThrow(ReferenceError);
  });

  // 14. toString (part 1)
  test("toString returns string representation of the list", () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  // 15. toString (part 2)
  test("toString returns different string for done todo", () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });

  // 16. toString (part 3)
  test("toString returns string for all done todos", () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  // 17. forEach
  test("forEach() iterates over items in list", () => {
    let result = [];
    list.forEach((item) => result.push(item));
    expect(result).toEqual([todo1, todo2, todo3]);
  });

  // 18. filter
  test("filter() returns a new TodoList object with selected items", () => {
    expect(list.filter((item) => item.title === "Buy milk").toArray()).toEqual([
      todo1,
    ]);
  });
});
