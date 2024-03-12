const express = require("express");
const apiRoutes = express.Router();

const UsersController = require("../controllers/UsersController");
const ProductsController = require("../controllers/ProductsController");
const OrdersControllers = require("../controllers/OrdersController");
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

// Orders Routes

apiRoutes.route("/OrdersList").get(OrdersControllers.getOrders);

apiRoutes
  .route("/OrdersList/:id")
  .get(userVerification, OrdersControllers.getOrder);

apiRoutes.route("/OrderAdd").post(OrdersControllers.addOrder);
apiRoutes.route("/OrderUpdate/:id").put(OrdersControllers.updateOrder);
apiRoutes.route("/OrderDelete/:id").delete(OrdersControllers.deleteOrder);

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
