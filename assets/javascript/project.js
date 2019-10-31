
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
        $("#bandPic").empty();
        $("#upcomingEvents").empty();
        $("#artistFB").empty();

        $.ajax({
            url: bitQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.image_url);
            var image = $("<img>");
            image.attr("src", response.image_url);
            image.addClass("bandPics");
            $("#bandPic").append(image);
            var artistLink = $("<a>");
            artistLink.addClass("artistFB");
            artistLink.attr("href", response.facebook_page_url);
            artistLink.attr("target", "blank");
            artistLink.text(response.name);
            $("#artistFB").append(artistLink);

        })
        $.ajax({
            url: bitQueryURL2,
            method: "GET",
        }).then(function (response2) {
            console.log(response2);
            if (response2.upcoming_event_count < 1){
                $("#upcomingEvents").append("<p>Not currently touring.</p>")
            }
            for (i = 0; i < response2.length; i++) {
                if (i < 5) {

                    var a = $("<a>");
                    a.attr("href", response2[i].url);
                    a.attr("target", "blank");
                    a.addClass("tourInfo");
                    a.html(response2[i].datetime + " " + response2[i].venue.city + ", " + response2[i].venue.country + "<br>" + response2[i].venue.name + "<br>");
                    $("#upcomingEvents").append(a);
                }
                else {
                    console.log("done")
                }
            }
            $("#userInput").text(" ");
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

        $("#similarArtist").empty();


        for (i = 0; i < response.similarartists.artist.length; i++) {
            if (i < 5) {

                var b = $("<a>")
                b.html(response.similarartists.artist[i].name + "<br>");
                b.attr("href", response.similarartists.artist[i].url);
                b.attr("target", "blank");
                $("#similarArtist").append(b);
            }
        }


    })

    $.ajax({
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=7f191238f1b38fc7abb83fcb39e8b91c&format=json",
        method: "GET",


    }).then(function (response2) {
        console.log(response2);

    
        var c = $("<a>");
        c.html("<br>" + "Listen Here!");
        c.attr("href", response2.artist.url);
        c.attr("target", "blank");
        $("#artistFB").append(c);
    });

});


