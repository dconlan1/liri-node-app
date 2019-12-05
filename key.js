console.log('this is loaded');

exports.spotify = {
    id:process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

//omdb key
var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=517e907e";