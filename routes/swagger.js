const express = require("express");
const apiRoutes = express.Router();
const ProduitsController = require("../controllers/ProduitsController");
const { userVerification } = require("../middlewares/AuthMiddleware");

/**
 * @swagger
 * /api/v1/ProduitsListe:
 *   get:
 *     summary: Récupérer la liste des produits
 *     description: Récupère la liste de tous les produits.
 *     responses:
 *       '200':
 *         description: Succès - Liste des produits récupérée.
 */
apiRoutes.get("/api/v1/ProduitsListe", ProduitsController.getProduits);

/**
 * @swagger
 * /api/v1/ProduitsListe/{id}:
 *   get:
 *     summary: Récupérer un produit par ID
 *     description: Récupère un produit spécifique en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit à récupérer.
 *     responses:
 *       '200':
 *         description: Succès - Produit récupéré avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: L'ID du produit.
 *                       example: 123
 *                     name:
 *                       type: string
 *                       description: Le nom du produit.
 *                       example: "Nom du produit"
 */
apiRoutes.get("/api/v1/ProduitsListe/:id", userVerification, ProduitsController.getProduit);

module.exports = apiRoutes;
