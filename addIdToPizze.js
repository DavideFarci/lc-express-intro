const fs = require("fs");
const listaPizze = require("./db/pizze.json");
const { kebabCase } = require("lodash");

// ciclo sulla lista delle pizze
let id = 100;

const generateSlug = (text) => {
  const slug = kebabCase(text);

  // controllo che non sia già presente

  return slug;
};

const nuovaLista = listaPizze.map((pizza) => {
  pizza.id = id;
  pizza.slug = generateSlug(pizza.name);
  id++;

  return pizza;
});

// salviamo i dati dentro il json

fs.writeFileSync("./db/pizze.json", JSON.stringify(nuovaLista, null, 2));
