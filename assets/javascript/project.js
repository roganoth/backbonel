
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
            
           var b = $("<p>").text(response.similarartists.artist[i].name);
          $("#tourDates-div").append(b);
            }
       }


    })


});


