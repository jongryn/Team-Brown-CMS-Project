var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3#F0rg0t#3",
  database: "task_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // res.send(data);

    res.render("index", { tasks: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // res.send('You sent, ' + req.body.task);

  connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(port);


//==============================================================================
//==============================================================================

// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
//
// var app = express();
// var port = 3000;
//
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
//
// app.use(methodOverride("_method"));
//
// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
//
// var exphbs = require("express-handlebars");
//
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
//
// var mysql = require("mysql");
//
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "3#F0rg0t#3",
//   database: "day_planner_db"
// });
//
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//
//   console.log("connected as id " + connection.threadId);
// });
//
// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM plans;", function(err, data) {
//     if (err) {
//       throw err;
//     }
//     res.render("index", { plans: data });
//   });
// });
//
// app.post("/", function(req, res) {
//   connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
//     if (err) {
//       throw err;
//     }
//
//     res.redirect("/");
//   });
// });
//
// app.delete("/:id", function(req, res) {
//   connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       throw err;
//     }
//
//     res.redirect("/");
//   });
// });
//
// app.put("/", function(req, res) {
//   connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.body.id], function(err, result) {
//     if (err) {
//       throw err;
//     }
//
//     res.redirect("/");
//   });
// });
//
// app.listen(port);
