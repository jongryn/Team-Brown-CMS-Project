// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // 404 route loads 404.html
  app.get("/404", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/404.html"));
  });

  // basic_table route loads basic_table.html
  app.get("/basic_table", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/basic_table.html"));
  });

  // blank route loads blank.html
  app.get("/blank", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/blank.html"));
  });

  // buttons route loads buttons.html
  app.get("/buttons", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/buttons.html"));
  });

  // chart-chartjs route loads chart-chartjs.html
  app.get("/chart-chartjs", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/chart-chartjs.html"));
  });  

  // form_component route loads form_component.html
  app.get("/form_component", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/form_component.html"));
  });

  // form_validation route loads form_validation.html
  app.get("/form_validation", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/form_validation.html"));
  });  
  
  // general route loads general.html
  app.get("/general", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/general.html"));
  });

  // grids route loads grids.html
  app.get("/grids", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/grids.html"));
  });  
  
  // login route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });    

  // profile route loads profile.html
  app.get("/views/profile.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/profile.html"));
  });  
  
  // widgets route loads widgets.html
  app.get("/widgets", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/widgets.html"));
  });  
  
  
};
