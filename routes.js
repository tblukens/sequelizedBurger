const BurgerController = require('./controllers/BurgerController')

module.exports = (app) => {
    app.get("/api/burgers/all", BurgerController.index)

    app.post("/api/burgers/new", BurgerController.newBurger)

    app.put("/api/burgers/:id", BurgerController.devour)
}