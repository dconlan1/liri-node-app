require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

$(document).submit(function () {
    // prevent default
    event.preventDefault();
    // omdb api key
    var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=517e907e";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {



        var queryURL = ""
