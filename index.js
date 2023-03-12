const express = require("express");
const cors = require("cors");
const path = require("path");

const database = require("./db/database.js");
const genericRoutes = require("./application/Posts/postRoutes.js");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join("public")));
app.use("/api", genericRoutes);
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

database.sync();

app.listen(PORT, () => {
  console.log("Servidor rodando");
});
