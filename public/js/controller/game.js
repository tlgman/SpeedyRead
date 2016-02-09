app.controller('GameController',['$scope', '$interval', 'GameFactory', 'SentenceFactory',
function($scope, $interval, GameFactory, SentenceFacotry){
    $scope.level = GameFactory.getLevel();
    $scope.roundStart = true;
    var intervalTime = 20, endTime = 2000;
    var cumulTime = 0;
    var timer = $interval(function(){
        cumulTime += intervalTime;
        var percent = Math.ceil(cumulTime/endTime * 100);
        console.log(percent);
        if(!$scope.barStyle){
            $scope.barStyle = {'width': percent+'%'};
        } else{
            $scope.barStyle['width'] =  percent+'%';
        }

        if(cumulTime >= endTime){
            $scope.roundStart = false;
            console.log('STOP');
            $interval.cancel(timer);
        }
    }, intervalTime);
    console.log($scope.level);
}]);