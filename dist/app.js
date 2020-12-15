
document.getElementById("searchBtn").addEventListener('click', (e)=> {
    const searchText = document.getElementById("searchField").value;
    getMovies(searchText);
    getRandomMovies(searchText);
    e.preventDefault();
});

function getMovies(movieTitle) {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + config.omdbApiKey + '&t=' + movieTitle)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Plot
            moviePlot = data.Plot;
            document.getElementById("plot").innerHTML = moviePlot;

            // Actors
            movieActors = data.Actors;
            document.getElementById("actors").innerHTML = movieActors;

            // Ratings
            movieRating = data.imdbRating;
            document.getElementById("rating").innerHTML = movieRating;

            // Length
            movieLength = data.Runtime;
            document.getElementById("length").innerHTML = movieLength;

            // Genre
            movieGenre = data.Genre;
            document.getElementById("genre").innerHTML = movieGenre;
        })
        .catch((err) => {
            console.log(err);
        });
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + config.omdbApiKey + '&t=' + movieTitle)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            moviePoster = data.Poster;
            document.getElementById('poster').src = moviePoster;
            document.querySelector
        })
        .catch((err) => {
            console.log(err);
        });  
}

function getRandomMovies(movieTitle) {
    // get and return a random movie genre code
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + config.tmdbApiKey + '&with_original_language=en-US&query=' + movieTitle)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            genreLength = data.results[0].genre_ids.length;
            x = Math.floor((Math.random() * genreLength));
            genre = data.results[0].genre_ids[x];
            // Use random movie genre code to get random movies from that genre
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + config.tmdbApiKey + '&language=en-US&with_genres=' + genre)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    randomMovieList = data.results.length;
                    // Generate random number to pick three movies from randomMovieList
                    movies = data.results
                    counter = 0
                    while (counter < 3) {
                        randIntOne = Math.floor((Math.random() * randomMovieList));
                        randIntTwo = Math.floor((Math.random() * randomMovieList));
                        randIntThree = Math.floor((Math.random() * randomMovieList));
                        if (randIntOne != randIntTwo) {
                            counter ++;
                        }
                        if (randIntOne != randIntThree) {
                            counter ++;
                        }
                        if (randIntTwo != randIntThree) {
                            counter ++;
                        }
                    }
                    // Print three random movie; title, poster, plot summary and genre
                    // movie one
                    document.getElementById('recommendation1-title').innerHTML = data.results[randIntOne].title;
                    document.getElementById('recommendation1-poster').src = 'https://image.tmdb.org/t/p/w154/' + data.results[randIntOne].poster_path;
                    document.getElementById('recommendation1-plot').innerHTML = data.results[randIntOne].overview;
                    // movie 2
                    document.getElementById('recommendation2-title').innerHTML = data.results[randIntTwo].title;
                    document.getElementById('recommendation2-poster').src = 'https://image.tmdb.org/t/p/w154/' + data.results[randIntTwo].poster_path;
                    document.getElementById('recommendation2-plot').innerHTML = data.results[randIntTwo].overview;
                    // movie 3
                    document.getElementById('recommendation3-title').innerHTML = data.results[randIntThree].title;
                    document.getElementById('recommendation3-poster').src = 'https://image.tmdb.org/t/p/w154/' + data.results[randIntThree].poster_path;
                    document.getElementById('recommendation3-plot').innerHTML = data.results[randIntThree].overview;
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}







//TO USE AXIOS
/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> 
 <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */

/*
function getMovies(movieTitle) {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=' + config.omdbApiKey + '&t=' + movieTitle)
        .then((response) => {
            base = response.data;

            // Plot
            moviePlot = base.Plot;
            document.getElementById("plot").innerHTML = moviePlot;

            // Actors
            movieActors = base.Actors;
            document.getElementById("actors").innerHTML = movieActors;

            // Ratings
            movieRating = base.imdbRating;
            document.getElementById("rating").innerHTML = movieRating;

            // Length
            movieLength = base.Runtime;
            document.getElementById("length").innerHTML = movieLength;

            // Genre
            movieGenre = base.Genre;
            document.getElementById("genre").innerHTML = movieGenre;
        })
        .catch((err) => {
            console.log(err);
        });
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=' + config.omdbApiKey + '&t=' + movieTitle)
        .then((response) => {
            moviePoster = response.data.Poster;
            document.getElementById('poster').src = moviePoster;
            document.querySelector
        })
        .catch((err) => {
            console.log(err);
        });  
}
*/
/*
function getRandomMovies(movieTitle) {
    // get and return a random movie genre code
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + config.tmdbApiKey + '&with_original_language=en-US&query=' + movieTitle)
        .then((response) => {
            genreLength = response.data.results[0].genre_ids.length;
            x = Math.floor((Math.random() * genreLength));
            genre = response.data.results[0].genre_ids[x];
            // Use random movie genre code to get random movies from that genre
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=' config.tmdbApiKey + '&language=en-US&with_genres=' + genre)
            .then((response) => {
                base = response.data;
                randomMovieList = response.data.results.length;
                // Generate random number to pick three movies from randomMovieList
                movies = response.data.results
                counter = 0
                while (counter < 3) {
                    randIntOne = Math.floor((Math.random() * randomMovieList));
                    randIntTwo = Math.floor((Math.random() * randomMovieList));
                    randIntThree = Math.floor((Math.random() * randomMovieList));
                    if (randIntOne != randIntTwo) {
                        counter ++;
                    }
                    if (randIntOne != randIntThree) {
                        counter ++;
                    }
                    if (randIntTwo != randIntThree) {
                        counter ++;
                    }
                }
                // Print three random movie; title, poster, plot summary and genre
                // movie one
                document.getElementById('recommendation1-title').innerHTML = base.results[randIntOne].title;
                document.getElementById('recommendation1-poster').src = 'https://image.tmdb.org/t/p/w154/' + response.data.results[randIntOne].poster_path;
                document.getElementById('recommendation1-plot').innerHTML = base.results[randIntOne].overview;
                // movie 2
                document.getElementById('recommendation2-title').innerHTML = base.results[randIntTwo].title;
                document.getElementById('recommendation2-poster').src = 'https://image.tmdb.org/t/p/w154/' + response.data.results[randIntTwo].poster_path;
                document.getElementById('recommendation2-plot').innerHTML = base.results[randIntTwo].overview;
                // movie 3
                document.getElementById('recommendation3-title').innerHTML = base.results[randIntThree].title;
                document.getElementById('recommendation3-poster').src = 'https://image.tmdb.org/t/p/w154/' + response.data.results[randIntThree].poster_path;
                document.getElementById('recommendation3-plot').innerHTML = base.results[randIntThree].overview;
            })
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
*/