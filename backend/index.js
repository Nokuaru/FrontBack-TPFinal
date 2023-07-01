const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/pokedex.js");
const port = 3000;
const conectarDB = require("./config/db");

conectarDB();
app.use(cors());
app.use(express.json());

app.use("/api/pokedex", router);

app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`);
});
