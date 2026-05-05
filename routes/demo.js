var express = require("express");
var router = express.Router();
const path = require("path");

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

router.get("/", (req, res, next) => {
  console.log("First handler!");
  // res.send("Welcom from demo router!");
  next();
});
router.get("/", (req, res, next) => {
  console.log("Second handler", req.time);
  res.json(todos);
});

router.get("/hello", (req, res, next) => {
  res.send("from hello route");
});

function getById(req, res, next) {
  console.log("ID : ", req.params.id);
  res.json(todos.filter((todo) => todo.id == req.params.id)[0]);
}

router.get("/secret", function (req, res, next) {
  console.log("Secret Handler!", req.time);
  res.status(401).send("Access Denied!");
});

router.get("/sendFile/:name", function (req, res, next) {
  const options = {
    root: path.join(__dirname, "../", "public"),
    // dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  // const filename = "hello.txt";
  console.log("Query : ", req.query());

  // const filename = req.params.name;
  const filename = req.query.name;
  res.sendFile(filename, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Send : ", filename);
    }
  });
});

router.get("/:id", getById);

router.get("/download", (req, res, next) => {
  res.download("./public/images/hello.txt");
});

router.get("/admin", function (req, res, next) {
  res.redirect("/demo/login");
});

router.get("/login", function (req, res, next) {
  res.send("This is Login Page!");
});

router.post("/", function (req, res, next) {
  const body = req.body;
  console.log("Send json body post method.");
  res.status(201).json(body);
});

router.get(
  "/reg/ab?cd",
  (req, res, next) => {
    console.log("Reg first handler!");
    next();
    // res.send("ab?cd");
  },
  function (req, res, next) {
    console.log("Reg second handler!");
    res.send("ab?cd");
  },
);

module.exports = router;
