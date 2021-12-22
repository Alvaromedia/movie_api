const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const res = require("express/lib/response");

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
    director: {
      name: "Frank Darabont",
      birth: 0000,
      death: 1111,
    },
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: {
      name: "Francis Ford Coppola",
      birth: 0000,
      death: 1111,
    },
    genre: "Drama",
  },
  {
    title: "The Godfather: part II",
    director: {
      name: "Francis Ford Coppola",
      birth: 0000,
      death: 1111,
    },
    genre: "Drama",
  },
  {
    title: "The Dark Knight",
    director: {
      name: "Cristopher Nolan",
      birth: 0000,
      death: 1111,
    },
    genre: "Action",
  },
  {
    title: "12 angry men",
    director: {
      name: "Sidney Lumet",
      birth: 0000,
      death: 1111,
    },
    genre: "Thriller",
  },
  {
    title: "Schindler's List ",
    director: {
      name: "Steven Spielberg",
      birth: 0000,
      death: 1111,
    },
    genre: "Drama",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: {
      name: "Peter Jackson",
      birth: 0000,
      death: 1111,
    },
    genre: "Fantasy",
  },
  {
    title: "Spider-man: No way Home",
    director: {
      name: "Jon Watts",
      birth: 0000,
      death: 1111,
    },
    genre: "Sci-Fi",
  },
  {
    title: "Pulp Fiction",
    director: {
      name: "Quentin Tarantino",
      birth: 0000,
      death: 1111,
    },
    genre: "Thriller",
  },
  {
    title: "The Good, the Bad and the Ugly",
    director: {
      name: "Sergio Leone",
      birth: 0000,
      death: 1111,
    },
    genre: "Western",
  },
];

// Get welcome message
app.get("/", (req, res) => {
  res.send("Welcome to my movie-based app!");
});

// Get secret url
app.get("/secreturl", (req, res) => {
  res.send("This is a secret URL");
});

// Get all movies
app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// Get specific movie by name
app.get("/movies/:title", (req, res) => {
  res.status(200).json(
    movies.find((movie) => {
      return movie.title === req.params.title;
    })
  );
});

// Get genre
app.get("/genres/:genre", (req, res) => {
  res.status(200).send("Successful get request");
});

// Return data about director.
app.get("/directors/:name", (req, res) => {
  res.status(200).json(
    movies.find((movie) => {
      return movie.director.name === req.params.name;
    })
  );
});

// Add new user
app.post("/users/:create", (req, res) => {
  res.send("Successful registration");
});

// Allow users to update their user information
app.put("/users/:modify", (req, res) => {
  res.send("Successful modification");
});

//Add movie to favourites
app.post("/favourites/:favourite-movie", (req, res) => {
  res.send("Successfully added movie to favourites");
});

// Delete movie from favourites
app.delete("/favourites/:delete", (req, res) => {
  res.send("Successfully deleted movie from favourites");
});

// Delete user
app.delete("/users/:delete", (req, res) => {
  res.send("Successfully deleted user");
});

app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
