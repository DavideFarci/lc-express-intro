const express = require("express");
const dotenv = require("dotenv");
const pizzaController = require("./controllers/pizza");

dotenv.config();

const app = express();

// Configurazione file statici (immagini)
app.use(express.static("public"));

app.get("/", (req, res) => {
  // Per debug
  //   const acceptTpe = req.accepts();
  //   console.log(acceptTpe);

  // Altro metodo
  //   if (req.accepts("text")) {
  //     res.type("text").send("Ciao a tutti");
  //   } else if (req.accepts("html")) {
  //     res.type("html").send("<h1>Ciao a tutti</h1>");
  //   } else if (req.accepts("application/json")) {
  //     res.type("application/json").send({ message: "Ciao a tutti" });
  //   }

  res.format({
    text: () => {
      res.type("text").send("Ciao a tutti");
    },
    html: () => {
      res.type("html").send("<h1>Ciao a tutti</h1>");
    },
    json: () => {
      res.type("json").send({ message: "Ciao a tutti" });
    },
    default: () => {
      res.status(406).send("Not acceptable");
    },
  });

  return;
  res.send("Ritenta");
});

app.get("/pizze", pizzaController.index);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port http://localhost:" + process.env.PORT);
});
