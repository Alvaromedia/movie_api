const mongoose = require("mongoose");
const Models = require("./models.js");

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect("mongodb://localhost:27017/mxFlixDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const res = require("express/lib/response");
const { send } = require("express/lib/response");
const req = require("express/lib/request");

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
    Title: "Philadelphia",
    Description:
      "A young Philadelphia lawyer who is infected with AIDS keeps his homosexuality hidden from his employers. When he is suddenly dismissed, he hires a homophobic lawyer for a wrongful dismissal suit.",
    Genre: {
      Name: "Drama",
      Description:
        "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
    },
    Director: {
      Name: "Jonathan Demme",
      Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
      Birth: "1944",
      Death: "2017",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "The Godfather",
    Description:
      "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    Genre: {
      Name: "Drama",
      Description:
        "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
    },
    Director: {
      Name: "Francis Ford Coppola",
      Bio: "Francis Ford Coppola is an American film director, producer, and screenwriter. ",
      Birth: "1939",
      Death: "",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "The Godfather II",
    Description:
      "Michael, Vito Corleone's son, attempts to expand his family's criminal empire. While he strikes a business deal with gangster Hyman Roth, he remains unaware of the lurking danger.",
    Genre: {
      Name: "Drama",
      Description:
        "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
    },
    Director: {
      Name: "Francis Ford Coppola",
      Bio: "Francis Ford Coppola is an American film director, producer, and screenwriter. ",
      Birth: "1939",
      Death: "",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "Psycho",
    Description:
      "Marion disappears after stealing money from her employer. Her lover and sister try to find her and end up reaching the infamous Bates Motel, where they meet Norman Bates.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Alfred Hitchcock",
      Bio: "Sir Alfred Joseph Hitchcock was an English filmmaker who was one of the most influential figures in the history of cinema.",
      Birth: "1899",
      Death: "1980",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "Rear Window",
    Description:
      "Professional photographer Jeff is stuck in his apartment, recuperating from a broken leg. Out of boredom, he begins to spy on his neighbours and comes across a shocking revelation.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Alfred Hitchcock",
      Bio: "Sir Alfred Joseph Hitchcock was an English filmmaker who was one of the most influential figures in the history of cinema.",
      Birth: "1899",
      Death: "1980",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "Vertigo",
    Description:
      "Detective Scottie who suffers from acrophobia is hired to investigate the strange activities of an old friend's wife. She commits suicide while Scottie becomes dangerously obsessed with her.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Alfred Hitchcock",
      Bio: "Sir Alfred Joseph Hitchcock was an English filmmaker who was one of the most influential figures in the history of cinema.",
      Birth: "1899",
      Death: "1980",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "Apocalypse Now",
    Description:
      "During the Vietnam War, an American captain is assigned a mission in Cambodia, to search and assassinate a renegade colonel, who has taken innocent lives and is believed to be a demigod by a tribe.",
    Genre: {
      Name: "Drama",
      Description:
        "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
    },
    Director: {
      Name: "Jonathan Demme",
      Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
      Birth: "1944",
      Death: "2017",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "Rachel Getting Married",
    Description:
      "A young woman who has been in and out of rehab for the past ten years, returns home for the weekend for her sister's wedding.",
    Genre: {
      Name: "Drama",
      Description:
        "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.",
    },
    Director: {
      Name: "Jonathan Demme",
      Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
      Birth: "1944",
      Death: "2017",
    },
    ImagePath: "N/A",
    Featured: true,
  },

  {
    Title: "The Birds",
    Description:
      "Melanie, a rich socialite, follows Mitch, a lawyer, to his home in Bodega Bay to play a practical joke on him. Things take a bizarre turn when the birds in the area begin to attack the people there.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Alfred Hitchcock",
      Bio: "Sir Alfred Joseph Hitchcock was an English filmmaker who was one of the most influential figures in the history of cinema.",
      Birth: "1899",
      Death: "1980",
    },
    ImagePath: "N/A",
    Featured: true,
  },
];

// GET welcome message
app.get("/", (req, res) => {
  res.send("Welcome to my movie-based app!");
});

// GET secret URL
app.get("/secreturl", (req, res) => {
  res.send("This is a secret URL");
});

// GET documentation
app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

// GET all movies
app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

// GET specific movie by name
app.get("/movies/:title", (req, res) => {
  res.status(200).json(
    movies.find((movie) => {
      return movie.Title === req.params.title;
    })
  );
});

// GET genre TODO: Works relatively
app.get("/genres/:genre", (req, res) => {
  res.status(200).json(
    movies.find((movie) => {
      return movie.Genre.Name === req.params.genre;
    })
  );
});

// GET data about director. TODO: Works relatively
app.get("/directors/:name", (req, res) => {
  res.status(200).json(
    movies.find((movie) => {
      return movie.Director.Name === req.params.name;
    })
  );
});

// Add new user
// app.post("/users/:create", (req, res) => {
//   res.send("Successful registration");
// });

// Add a user.
/*We will expect JSON in this format
{
ID: Integer,
Username: String,
Password: String,
Email: String
Birthday: Date
}
*/

// POST (create) a user
app.post("/users", (req, res) => {
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + " already exists");
      } else {
        Users.create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error: " + error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error: " + error);
    });
});

// GET all users
app.get("/users", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

// GET a user by username
app.get("/users/:Username", (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

// Update users info by username
/* 
We will expect a JSON in this format
{
  Username: String, 
  (required)
  Password: String,
  (required)
  Email: String,
  (required)
  Birthday: Date
}
*/

// PUT (update) a user by username
app.put("/users/:Username", (re, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $set: {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
      },
    },
    { new: true }, // This lines makes sure that the (updated) document is returned
    (err, updateUser) => {
      if (err) {
        console.error(err);
        res.status(500), send("Error: " + err);
      } else {
        res.json(updateUser);
      }
    }
  );
});

// Allow users to update their user information
// app.put("/users/:modify", (req, res) => {
//   res.send("Successful modification");
// });

// POST (add) movie to a users list of favourites
app.post("users/:Username/movies/:MovieID", (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $push: { FavouriteMovies: req.params.MovieID },
    },
    { new: true }, // This line makes sure that the (updated) document is returned
    (err, updateUser) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updateUser);
      }
    }
  );
});

// DELETE  a movie from favourites
app.delete("users/:Username/movies/:MovieID", (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
    {
      $pull: { FavouriteMovies: req.params.MovieID },
    },
    { new: true }, // This line makes sure that the (updated) document is returned
    (err, updateUser) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updateUser);
      }
    }
  );
});

// Delete a user by username
app.delete("users/:Username", (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + " was not found");
      } else {
        res.status(200).send(req.params.Username + " was successfully deleted");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Add movie to favourites
app.post("/favourites/:favourite-movie", (req, res) => {
  res.send("Successfully added movie to favourites");
});

// Delete movie from favourites
app.delete("/favourites/:delete", (req, res) => {
  res.send("Successfully deleted movie from favourites");
});

app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
