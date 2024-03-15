const cron = require("node-cron");
const {
  addHomeProducts,
  deleteHomeProducts,
} = require("../controllers/ProductsController");

const updateRandomProductsDaily = () => {
  cron.schedule("*/60 * * * * *", async () => {
    try {
      await deleteHomeProducts();
      await addHomeProducts();

      console.log("Produits aléatoires mis à jour avec succès");
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des produits aléatoires:",
        error
      );
    }
  });
};

module.exports = updateRandomProductsDaily;
