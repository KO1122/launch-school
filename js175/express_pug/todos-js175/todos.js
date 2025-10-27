const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");
const TodoList = require("./lib/todolist");
const Todo = require("./lib/todo");
const { sortTodoLists, sortTodos } = require("./lib/sort");

const app = express();
const host = "localhost";
const port = 3000;

// Static data for initial testing
let todoLists = require("./lib/seed-data");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    name: "launch-school-todos-session-id",
    resave: false,
    saveUninitialized: true,
    secret: "this is not very secure",
  })
);
app.use(flash());

// Extract session info
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

const loadTodoList = (todoListId) => {
  return todoLists.find((todoList) => todoList.id === todoListId);
};

const loadTodo = (todoListId, todoId) => {
  return loadTodoList(todoListId)?.todos.find((todo) => todo.id === todoId);
};

app.get("/", (req, res) => {
  res.redirect("/lists");
});

// Render new todo list page
app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

// Render the list of todo lists
app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortTodoLists(todoLists),
  });
});

app.get("/lists/:todoListId", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId);
  if (todoList) {
    res.render("list", {
      todoList,
      todos: sortTodos(todoList),
    });
  } else {
    next(new Error("Not found."));
  }
});

// Toggle Todo Completion Status
app.post("/lists/:todoListId/todos/:todoId/toggle", (req, res, next) => {
  let { todoListId, todoId } = req.params;
  let todo = loadTodo(+todoListId, +todoId);
  if (todo) {
    let title = todo.title;
    if (todo.isDone()) {
      todo.markUndone();
      req.flash("success", `"${title}" marked as NOT done!`);
    } else {
      todo.markDone();
      req.flash("success", `"${title}" marked done.`);
    }
    res.redirect(`/lists/${todoListId}`);
  } else {
    next(new Error("Not found."));
  }
});

// Delete a Todo
app.post("/lists/:todoListId/todos/:todoId/destroy", (req, res, next) => {
  let { todoListId, todoId } = req.params;

  let todoList = loadTodoList(+todoListId);
  let todo = loadTodo(+todoListId, +todoId);

  if (todo) {
    let title = todo.title;
    let todoIdx = todoList.findIndexOf(todo);
    todoList.removeAt(todoIdx);

    req.flash("success", `"${title}" was deleted!`);
    res.redirect(`/lists/${todoListId}`);
  } else {
    next(new Error("Not found."));
  }
});

// Mark All Todos As Done
app.post("/lists/:todoListId/complete_all", (req, res, next) => {
  let { todoListId } = req.params;
  let todoList = loadTodoList(+todoListId);

  if (todoList) {
    todoList.markAllDone();
    req.flash("success", `All todos are done!`);
    res.redirect(`/lists/${todoListId}`);
  } else {
    next(new Error("Not found."));
  }
});

// Display the Edit Todo List Page
app.get("/lists/:todoListId/edit", (req, res, next) => {
  let { todoListId } = req.params;
  let todoList = loadTodoList(+todoListId);
  if (todoList) {
    res.render("edit-list", {
      todoList,
    });
  } else {
    next(new Error("Not found."));
  }
});

// Delete the Todo List
app.post("/lists/:todoListId/destroy", (req, res, next) => {
  let todoListId = +req.params.todoListId;
  let todoListIdx = todoLists.findIndex(
    (todoList) => todoList.id === todoListId
  );

  if (todoListIdx !== -1) {
    todoLists.splice(todoListIdx, 1);

    req.flash("success", `The todo list was deleted!`);
    res.redirect(`/lists`);
  } else {
    next(new Error("Not found."));
  }
});

// Edit the Todo List Title
app.post(
  "/lists/:todoListId/edit",
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom((title) => {
        let duplicate = todoLists.find((list) => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
  (req, res, next) => {
    let todoListId = req.params.todoListId;
    let todoList = loadTodoList(+todoListId);
    if (!todoList) {
      next(new Error("Not found."));
    } else {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        errors.array().forEach((message) => req.flash("error", message.msg));

        res.render("edit-list", {
          flash: req.flash(),
          todoListTitle: req.body.todoListTitle,
          todoList: todoList,
        });
      } else {
        todoList.setTitle(req.body.todoListTitle);
        req.flash("success", "Todo list updated.");
        res.redirect(`/lists/${todoListId}`);
      }
    }
  }
);

app.use((err, req, res, _next) => {
  console.log(err); // Writes more extensive information to the console log
  res.status(404).send(err.message);
});

// Create a new todo list
app.post(
  "/lists",
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom((title) => {
        let duplicate = todoLists.find((list) => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((message) => req.flash("error", message.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,
      });
    } else {
      todoLists.push(new TodoList(req.body.todoListTitle));
      req.flash("success", "The todo list has been created.");
      res.redirect("/lists");
    }
  }
);

// Create a new todo
app.post(
  "/lists/:todoListId/todos",
  [
    body("todoTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The todo title is required.")
      .isLength({ max: 100 })
      .withMessage("Todo title must be between 1 and 100 characters."),
  ],
  (req, res) => {
    let { todoListId } = req.params;
    let todoList = loadTodoList(+todoListId);

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((message) => req.flash("error", message.msg));
    } else {
      let todo = new Todo(req.body.todoTitle);
      todoList.add(todo);
      req.flash("success", "The todo has been created.");
    }
    res.redirect(`/lists/${todoListId}`);
  }
);

// Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});
