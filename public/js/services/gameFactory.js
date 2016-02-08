app.factory('GameFactory', function(){
    var factory = {
        sentences:{
            "l1": [
                "test",
                "sentence2"
            ]
        },
        getSentence: function(level){
            if(factory.sentences['l'+level]){
                var listSentences = factory.sentences['l'+level];
                return listSentences[Math.floor(Math.random() * listSentences.length)];
            } else{
                // Requète http
                console.error('Error (pour le moment) !!');
            }
        }
    };
    return factory;
});