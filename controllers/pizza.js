// Posso importare direttamente un file json, che restituirà un array di oggetti
const menu = require("../db/pizze.json");

function index(req, res) {
  res.format({
    html: () => {
      const html = ["<h1>Lista delle Pizze</h1>"];
      html.push("<ul>");

      for (const pizza of menu) {
        html.push(`<li>
                    <h3>${pizza.name}</h3>
                    <img src="${pizza.image}" alt="">
                  </li>`);
      }

      html.push("<ul>");
      res.send(html.join(""));
    },
    json: () => {
      res.type("json").send({
        totalElement: menu.length,
        list: menu,
      });
    },
  });
  res.send("Lista delle pizze");
}

module.exports = {
  index,
};
