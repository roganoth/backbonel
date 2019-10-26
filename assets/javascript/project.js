$("#search").click(function(){

var bitQueryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=test";
var artist;

$.ajax({
    url: bitQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})
})