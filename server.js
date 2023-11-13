const express = require("express");
/**
 * @param {express.Request} Req
 * @param {express.Response} Res
 */
const dotenv = require("dotenv");
const homeController = require("./controllers/home");
const pizzeRouter = require("./routers/pizze");

dotenv.config();

const app = express();

// Configurazione file statici (immagini)
app.use(express.static("public"));

// Rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);

// rotte relative all'entità delle pizze
app.use("/pizze", pizzeRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port http://localhost:" + process.env.PORT);
});
