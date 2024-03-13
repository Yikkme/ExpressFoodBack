// Importer Express
const express = require("express");
// Utiliser Express
const app = express();
// Importer cors
const cors = require("cors");
// Importer fichier .env
require("dotenv").config({ path: "./.env" });
// Importer la connexion a mongoDb
require("./bdd/connexion");

const cronTask = require('./util/cron');

// Démarrez la tâche cron pour mettre à jour les produits aléatoires quotidiennement
cronTask();

const port = process.env.PORT ;

const portClient = process.env.PORT_CLIENT ;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require('./swaggerDef');
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // path to the API docs
};
const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true 
};

app.use(cors(corsOptions));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(require("./routes/api"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur Serveur!");
});
app.listen((port), () => {
  console.log(`Serveur ecoute sur le port: ${port}`);

});
