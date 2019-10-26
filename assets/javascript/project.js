$("#Button").click(function(){

    var ytQueryURL = "https://www.googleapis.com/youtube/v3/playlists" + artist + "api=AIzaSyBcKMzNwbAtyNu07WyX9lJSU1VMgIueq0M"
    var artist;

    $.ajax({
        url: ytQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })




});