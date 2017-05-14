if(process.argv[2] === "movie-this"){
  var request = require("request");

  // Grab or assemble the movie name 
  var movieName = process.argv[3];
  for(i = 4; i < process.argv.length; i++){
      movieName += "+" + process.argv[i];
  }

  // Then run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&r=json";


  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  // Then create a request to the queryUrl
  // ...
  request(queryUrl, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

      // Then log the Release Year for the movie
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Released: " + JSON.parse(body).Year);
      console.log("Rating: " + JSON.parse(body).imdbRating);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
      console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoURL);
    }
  });
}