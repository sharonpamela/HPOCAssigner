// *********************************************************************************
// This file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("./../models");
const { QueryTypes } = require('sequelize');

// Description
// =============================================================
// /api/users
//     .get - get all the users' information
//     .post - create a new user entry

// /api/users/:userId
//     .get - get a particular user's details
//     .delete - delete a particular user via userId

// /api/users/:userEmail
//     .get - get a particular user's details via email (if exists)
//     .delete - delete a user via email

// Routes
// =============================================================
module.exports = function (app) {
  // get name, city, and state information for all available stores
  app.get("/api/users", function (req, res) {
    console.log("hit:  api/users")
    db.User.findAll({})
      .then(function (resp) {
        res.json(resp);
      });
  });

  // create a new single store entry
  app.post("/api/users", function (req, res) {
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      hpoc_username: req.body.hpoc_username,
      hpoc_password: req.body.hpoc_password,
      email: req.body.email
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // get details for a particular user via id
  app.get("/api/users/:userId", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.userId
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // delete a single specific user via id
  app.delete("/api/users/:userId", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.userId
      }
    })
      .then(function (data) {
        res.json(data);
      });
  });

  // get details for a particular user via email
  app.get("/api/users/userEmail", function (req, res) {
    const userEmail = parseInt(req.params.userEmail);
    db.User.findAll({
      where: {
        user_email: userEmail
      }
    })
      .then(function (resp) {
        res.json(resp);
      });
  });

  // delete a single specific user via email
  app.delete("/api/users/:userEmail", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.userEmail
      }
    })
      .then(function (data) {
        res.json(data);
      });
  });

};
