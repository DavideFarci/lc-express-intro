const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  //   res.accepts("text/html");
  const acceptTpe = req.accepts();
  console.log(acceptTpe);

  if (req.accepts("text")) {
    res.type("text").send("Ciao a tutti");
  } else if (req.accepts("html")) {
    res.type("html").send("<h1>Ciao a tutti</h1>");
  } else if (req.accepts("application/json")) {
    res.type("application/json").send({ message: "Ciao a tutti" });
  }

  return;
  res.send("Ritenta");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port http://localhost:" + process.env.PORT);
});
