

var app = angular.module('testAng', ['ngMaterial', 'ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngAria', 'lfNgMdFileInput', 'md.data.table']);
app.config(function ($routeProvider) {
    // $httpProvider.defaults.cache = false;
    $routeProvider.when('/student', {
        templateUrl: '/html/Student/Register.html',
        controller: 'studentController'
        // showSidebar: true
    }).otherwise({
        // redirectTo: '/html/index.html'
        redirectTo: '/index'
    });
});

app.config(['$compileProvider', '$mdThemingProvider', function ($compileProvider, $mdThemingProvider) {
    $compileProvider.debugInfoEnabled(false);
    // $mdThemingProvider.theme('default').primaryPalette('teal');
}]);


//app.run([
//  '$rootScope',
//  function ($rootScope) {
//      // see what's going on when the route tries to change
//      $rootScope.$on('$routeChangeStart', function (event, next, current) {
//          // next is an object that is the route that we are starting to go to
//          // current is an object that is the route where we are currently
//          var currentPath = current.originalPath;
//          var nextPath = next.originalPath;

//          console.log('Starting to leave %s to go to %s', currentPath, nextPath);
//      });
//  }
//]);

