const fs = require("fs");
const path = require("path");

function index(req, res) {
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
      const htmlContent = fs.readFileSync(
        path.resolve(__dirname, "../index.html"),
        "utf-8"
      );
      res.type("html").send(htmlContent);
    },
    json: () => {
      res.type("json").send({ message: "Ciao a tutti" });
    },
    default: () => {
      res.status(406).send("Not acceptable");
    },
  });

  return;
}

function about(req, res) {
  res.send("about");
}

module.exports = {
  index,
  about,
};
