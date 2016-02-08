
var app = angular.module('SpeedyRead', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: '/home'})
        .when('/game', {templateUrl: '/game'})
        .otherwise({redirectTo: '/'});
}]);