const { Burger } = require("../models")

module.exports = {
    async newBurger (req, res) {
        try {
            // console.log(req.body.data.burger_name)
            // let newBurger = req.body.data.burger_name;
            // burger.insertOne(newBurger, result => {
            //     res.json({ id: result.insertId })
            // })
        } catch (err) {
            console.log(err)
        }
    },
    async index (req, res) {
        try {
            // burger.selectAll(data => {
                //     res.json(data)
                // })
            } catch (err) {
                console.log(err)
        }
    },
    async devour (req, res) {
        try {
            // let id = req.params.id;
            // console.log(id)
            // console.log(req.body)
            // console.log(req.body.data.devoured)
        
            // burger.updateOne({devoured: true}, id, result => {
            //     if (result.changedRows == 0) {
            //         If no rows were changed, then the ID must not exist, so 404
            //         return res.status(404).end();
            //     } else {
            //         res.status(200).end();
            //     }
            // })
        } catch (err) {
            console.log(err)
        }
    }
    
}