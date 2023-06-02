const Router = require('express').Router;
const heroController = require('../controller/HeroController');

const heroRouter = new Router();

heroRouter.post("/hero",heroController.create);
heroRouter.get("/hero",heroController.read);
heroRouter.patch("/hero/:id",heroController.update);
heroRouter.delete("/hero/:id",heroController.delete);

module.exports = heroRouter;
