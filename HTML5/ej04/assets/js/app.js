(function(){
    var tweet = {
        id : "250075927172759552",
        text : "Aggressive Ponytail #freebandnames",
        author : "Sean Cummings",
        createdAt : "Mon Sep 24 03:35:21 +0000 2012"
    };

    //APP.DB.insert(tweet);

    var success = function(datos){
        console.log(datos);
    };

    APP.DB.getAll(success);
})();