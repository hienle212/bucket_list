    var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

    myApp.config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/users.html'
      })
      .when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
      })
      .when('/user/:id', {
        templateUrl: 'partials/show.html'
      })
      .otherwise({
        redirectTo: '/'
      })
    })

