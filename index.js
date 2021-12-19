const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(methodOverride());

let movies = [
  {
    title: "The Shawshank Redemption",
    year: "1994",
  },
  {
    title: "The Godfather",
    year: "1972",
  },
  {
    title: "The Godfather: part II",
    year: "1974",
  },
  {
    title: "The Dark Knight",
    year: "2008",
  },
  {
    title: "12 angry men",
    year: "1957",
  },
  {
    title: "Schindler's List ",
    year: "1993",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",
  },
  {
    title: "Spider-man: No way Home",
    year: "2021",
  },
  {
    title: "Pulp Fiction",
    year: "1994",
  },
  {
    title: "The Good, the Bad and the Ugly",
    year: "1966",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my movie-based app!");
});

app.get("/secreturl", (req, res) => {
  res.send("This is a secret URL");
});

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
