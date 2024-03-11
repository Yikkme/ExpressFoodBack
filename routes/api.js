const express = require("express");
const apiRoutes = express.Router();

const UsersController = require("../controllers/UsersController");
const ProductsController = require("../controllers/ProductsController");
const CommandsControllers = require("../controllers/CommandsController");
const DeliverersController = require("../controllers/DeliverersController");

const AuthController = require("../controllers/AuthController");

const {
  userVerification,
  authorization,
} = require("../middlewares/AuthMiddleware");


// Gestion des routes

// PRODUITS Routes

apiRoutes.route("/ProductsListe").get(ProductsController.getProducts);

apiRoutes
  .route("/ProductsListe/:id")
  .get(userVerification, ProductsController.getProduct);
apiRoutes.route("/ProductAjouter").post(ProductsController.addProduct);
apiRoutes.route("/ProductModifier/:id").put(ProductsController.updateProduct);
apiRoutes
  .route("/ProductSuprimmer/:id")
  .delete(ProductsController.deleteProduct);

// USER Routes
apiRoutes.route("/Register").post(AuthController.Signup);
apiRoutes.route("/Login").post(AuthController.Login);

apiRoutes.route("/UsersList").get(userVerification, UsersController.getUsers);
apiRoutes
  .route("/UsersList/:id")
  .get(userVerification, UsersController.getUser);
apiRoutes
  .route("/UserModifier/:id")
  .put(userVerification, authorization(["admin"]), UsersController.updateUser);
apiRoutes
  .route("/UserDelete/:id")
  .delete(userVerification, UsersController.deleteUser);

// Commands Routes

apiRoutes.route("/CommandsList").get(CommandsControllers.getCommands);

apiRoutes
  .route("/CommandsList/:id")
  .get(userVerification, CommandsControllers.getCommand);

apiRoutes.route("/CommandAdd").post(CommandsControllers.addCommand);
apiRoutes.route("/CommandUpdate/:id").put(CommandsControllers.updateCommand);
apiRoutes.route("/CommandDelete/:id").delete(CommandsControllers.deleteCommand);

// Livreurs Routes

apiRoutes.route("/DelivererList").get(DeliverersController.getDeliverers);

apiRoutes
  .route("/DelivererList/:id")
  .get(userVerification, DeliverersController.getDeliverer);
apiRoutes.route("/DelivererAdd").post(DeliverersController.addDeliverer);
apiRoutes
  .route("/DelivererUpdate/:id")
  .put(DeliverersController.updateDeliverer);
apiRoutes
  .route("/DelivererDelete/:id")
  .delete(DeliverersController.deleteDeliverer);

module.exports = apiRoutes;
