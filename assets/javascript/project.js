$(document).ready(function(){

$("#Button").click(function () {
    
    var artist = $("#userInput").val().trim();
    var ytQueryURL = "https://www.googleapis.com/youtube/v3/playlists" + artist + "api=AIzaSyBcKMzNwbAtyNu07WyX9lJSU1VMgIueq0M"

    $.ajax({
        url: ytQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.image_url);
    })




});
$("#search").click(function () {

    var artist = $("#userInput").val().trim();
    var bitQueryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=test";

    $.ajax({
        url: bitQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
})
})