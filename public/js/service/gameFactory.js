app.factory('GameFactory', function(){
    var factory = {
        level: null,
        getLevel: function(){
            if(factory.level === null){
                factory.level = localStorage.getItem('level');
                if(!factory.level){
                    factory.level = 1;
                    localStorage.setItem('level', 1);
                }
            }
            return factory.level;
        },
        saveLevel: function(level){
            factory.level = level;
            localStorage.setItem('level', factory.level);
        }
    };
    return factory;
});