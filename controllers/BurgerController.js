const { Burger } = require("../models");

module.exports = {
  async newBurger(req, res) {
    try {
      console.log(req.body.data.burger_name)
      let newBurger = req.body.data.burger_name;
      Burger.create({
        burger_name: newBurger
      }).then(result => {
        // console.log(result)
        res.send(result)
      });
    } catch (err) {
      console.log(err);
    }
  },
  async index(req, res) {
    try {
      Burger.findAll({})
      .then(data => {
        // console.log(data)
        res.json(data);
      });
    } catch (err) {
      console.log(err);
    }
  },
  async devour(req, res) {
    try {
      let id = req.params.id;
      console.log(id)
      console.log(req.body)
      console.log(req.body.data.devoured)
      Burger.update({devoured: true}, {where: { id: id }}).then(result => {
              res.status(200).end();
      })
    } catch (err) {
      console.log(err);
    }
  }
};
