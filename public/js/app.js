
var app = angular.module('SpeedyRead', ['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: '/home'})
        .when('/game', {templateUrl: '/game', controller: 'GameController'})
        .otherwise({redirectTo: '/'});
}]);

app.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[{');
    $interpolateProvider.endSymbol('}]');
}]);