
$(document).ready(function () {

    $("#Button").click(function () {

        var artist = $("#userInput").val().trim();
        var ytQueryURL = "https://www.googleapis.com/youtube/v3/playlists" + artist + "api=AIzaSyBcKMzNwbAtyNu07WyX9lJSU1VMgIueq0M"

        $.ajax({
            url: ytQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })




    });
    $("#search").click(function (event) {
        event.preventDefault();
        var artist = $("#userInput").val().trim();
        var bitQueryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=test";
        var bitQueryURL2 = "https://rest.bandsintown.com/artists/" + artist + "/events/?app_id=test";
        $("#tourDates-div").empty();

        $.ajax({
            url: bitQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.image_url);
            var image = $("<img>");
            image.attr("src", response.image_url);
            image.addClass("bandPics");
            $("#tourDates-div").append(image);

        })
        $.ajax({
            url: bitQueryURL2,
            method: "GET",
        }).then(function (response2) {
            console.log(response2);
            for (i = 0; i < response2.length; i++) {
                if (i < 5){

                    var a = $("<div>");
                    a.addClass("tourInfo");
                    a.html(response2[i].datetime + " " + response2[i].venue.city + ", " + response2[i].venue.country + "<br>" + response2[i].venue.name);
                    $("#tourDates-div").append(a);
                }
                else {
                    console.log("done")
                }
            }
            // for (i = 0; i < 5; i++) {
            //     a.html(response2[i].datetime + " " + response2[i].venue.city + ", " + response2[i].venue.country + "<br>" + response2[i].venue.name);
            //     $("#tourDates-div").append(a);
            // }
        })
    })
})


$("#search").click(function () {

    var artist = $("#userInput").val().trim();

    $.ajax({
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + artist + "&api_key=7f191238f1b38fc7abb83fcb39e8b91c&format=json",
        method: "GET",


    }).then(function (response) {
        console.log(response);

        $("#tourDates-div").empty();


        for (i = 0; i < response.similarartists.artist.length; i++) {
            if (i < 5)  {
            
           var b = $("<a>")
           b.html(response.similarartists.artist[i].name + "<br>");
           b.attr("href", response.similarartists.artist[i].url);
          $("#tourDates-div").append(b);
            }
       }


    })


});


