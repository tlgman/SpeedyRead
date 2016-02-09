app.factory('SentenceFactory',['$http', '$q', function($http, $q){
    var factory = {
        sentences:{
            "l1": [
                "test",
                "sentence2"
            ]
        },
        getSentence: function(level){
            var task = $q.defer();
            if(factory.sentences['l'+level]){
                var listSentences = factory.sentences['l'+level];
                task.resolve(listSentences[Math.floor(Math.random() * listSentences.length)]);
            } else{
                $http.get('/sentences/'+level).then(function succes(response){
                    task.resolve(response.data);
                }, function error(response){
                    task.reject(response.status);
                });
            }
            return task.promise;
        }
    };
    return factory;
}]);