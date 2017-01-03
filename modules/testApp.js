/// <reference path="../html/public/studentsList.html" />
/// <reference path="../html/public/studentsList.html" />

//var app = angular.module('testApp', ['ui.router']);
var app = angular.module('testApp', ['ngMaterial', 'ui.router', 'ngResource', 'ngMessages', 'ngAnimate', 'ngAria', 'lfNgMdFileInput','md.data.table']);
app.config(function ($stateProvider, $locationProvider) {
    $stateProvider
    .state('home', {
        //url: 'home',
        //templateUrl: '/home',
        url: 'home',
        templateUrl: '/html/home/studentHome.html',
        controller: 'studentController',
        controllerAs: '',
        resolve: {

        }
    })
    //.state('index', {
    //    url: '',
    //    templateUrl: '',
    //    controller: '',
    //    controllerAs: '',
    //    resolve: {
    //    }
    //})
    .state('student', {
        url: '/Student/Register',
        templateUrl: '/html/Student/Register.html',
        controller: 'studentController',
        controllerAs: 'studentCtrl',
        resolve: {
        }
    })
    .state('search', {
        url: '/Student/Search',
        templateUrl: '/html/public/Search.html',
        controller: 'searchController',
        controllerAs: 'searchCtrl',
        resolve: {
        }
    })
    .state('studentsList', {
        url: '/Students/StudentsList',
        //templateUrl: '/testhtml/testTable.html',
        templateUrl:'html/public/studentsList.html',
        controller: 'nutritionController',
        controllerAs: '',
        resolve: {

        }
    })
    .state('searchList',{
        url: '/Studnets/TestsearchList',
        templateUrl: 'testhtml/testList.html',
        controller: 'testListController',
        controllerAs: '',
        resolve: {

        }
    })
    .state('otherwise', {
        url: '/index',
        templateUrl: '/index.html',
        controller: 'indexCtrl',
        controllerAs: '',
        resolve: {}
    })
    
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
    $locationProvider.html5Mode(true);
});

//app.run(['$rootScope', '$location', '$routeParams', function ($rootScope, $location, $routeParams) {
//    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
//        console.log('Current route name: ' + $location.path());
//        // Get all URL parameter
//        console.log($routeParams);
//    });
//}]);

app.run(['$rootScope', '$state', '$stateParams',
                      function ($rootScope, $state, $stateParams) {
                          $rootScope.$state = $state;
                          $rootScope.$stateParams = $stateParams;
                      }
]);

//This is for Data Table
app.config(['$mdThemingProvider', function ($mdThemingProvider) {
    'use strict';

    $mdThemingProvider.theme('default')
     .primaryPalette('blue');
}])

//.controller('nutritionController', ['$mdEditDialog', '$q', '$scope', '$timeout', function ($mdEditDialog, $q, $scope, $timeout) {
//            'use strict';

//            $scope.selected = [];
//            $scope.limitOptions = [5, 10, 15];

//            $scope.options = {
//                rowSelection: true,
//                multiSelect: true,
//                autoSelect: true,
//                decapitate: false,
//                largeEditDialog: false,
//                boundaryLinks: false,
//                limitSelect: true,
//                pageSelect: true
//            };

//            $scope.query = {
//                order: 'name',
//                limit: 5,
//                page: 1
//            };

//            $scope.desserts = {
//                "count": 9,
//                "data": [
//                  {
//                      "name": "Frozen yogurt",
//                      "type": "Ice cream",
//                      "calories": { "value": 159.0 },
//                      "fat": { "value": 6.0 },
//                      "carbs": { "value": 24.0 },
//                      "protein": { "value": 4.0 },
//                      "sodium": { "value": 87.0 },
//                      "calcium": { "value": 14.0 },
//                      "iron": { "value": 1.0 }
//                  }, {
//                      "name": "Ice cream sandwich",
//                      "type": "Ice cream",
//                      "calories": { "value": 237.0 },
//                      "fat": { "value": 9.0 },
//                      "carbs": { "value": 37.0 },
//                      "protein": { "value": 4.3 },
//                      "sodium": { "value": 129.0 },
//                      "calcium": { "value": 8.0 },
//                      "iron": { "value": 1.0 }
//                  }, {
//                      "name": "Eclair",
//                      "type": "Pastry",
//                      "calories": { "value": 262.0 },
//                      "fat": { "value": 16.0 },
//                      "carbs": { "value": 24.0 },
//                      "protein": { "value": 6.0 },
//                      "sodium": { "value": 337.0 },
//                      "calcium": { "value": 6.0 },
//                      "iron": { "value": 7.0 }
//                  }, {
//                      "name": "Cupcake",
//                      "type": "Pastry",
//                      "calories": { "value": 305.0 },
//                      "fat": { "value": 3.7 },
//                      "carbs": { "value": 67.0 },
//                      "protein": { "value": 4.3 },
//                      "sodium": { "value": 413.0 },
//                      "calcium": { "value": 3.0 },
//                      "iron": { "value": 8.0 }
//                  }, {
//                      "name": "Jelly bean",
//                      "type": "Candy",
//                      "calories": { "value": 375.0 },
//                      "fat": { "value": 0.0 },
//                      "carbs": { "value": 94.0 },
//                      "protein": { "value": 0.0 },
//                      "sodium": { "value": 50.0 },
//                      "calcium": { "value": 0.0 },
//                      "iron": { "value": 0.0 }
//                  }, {
//                      "name": "Lollipop",
//                      "type": "Candy",
//                      "calories": { "value": 392.0 },
//                      "fat": { "value": 0.2 },
//                      "carbs": { "value": 98.0 },
//                      "protein": { "value": 0.0 },
//                      "sodium": { "value": 38.0 },
//                      "calcium": { "value": 0.0 },
//                      "iron": { "value": 2.0 }
//                  }, {
//                      "name": "Honeycomb",
//                      "type": "Other",
//                      "calories": { "value": 408.0 },
//                      "fat": { "value": 3.2 },
//                      "carbs": { "value": 87.0 },
//                      "protein": { "value": 6.5 },
//                      "sodium": { "value": 562.0 },
//                      "calcium": { "value": 0.0 },
//                      "iron": { "value": 45.0 }
//                  }, {
//                      "name": "Donut",
//                      "type": "Pastry",
//                      "calories": { "value": 452.0 },
//                      "fat": { "value": 25.0 },
//                      "carbs": { "value": 51.0 },
//                      "protein": { "value": 4.9 },
//                      "sodium": { "value": 326.0 },
//                      "calcium": { "value": 2.0 },
//                      "iron": { "value": 22.0 }
//                  }, {
//                      "name": "KitKat",
//                      "type": "Candy",
//                      "calories": { "value": 518.0 },
//                      "fat": { "value": 26.0 },
//                      "carbs": { "value": 65.0 },
//                      "protein": { "value": 7.0 },
//                      "sodium": { "value": 54.0 },
//                      "calcium": { "value": 12.0 },
//                      "iron": { "value": 6.0 }
//                  }
//                ]
//            };

//            $scope.editComment = function (event, dessert) {
//                event.stopPropagation(); // in case autoselect is enabled

//                var editDialog = {
//                    modelValue: dessert.comment,
//                    placeholder: 'Add a comment',
//                    save: function (input) {
//                        if (input.$modelValue === 'Donald Trump') {
//                            input.$invalid = true;
//                            return $q.reject();
//                        }
//                        if (input.$modelValue === 'Bernie Sanders') {
//                            return dessert.comment = 'FEEL THE BERN!'
//                        }
//                        dessert.comment = input.$modelValue;
//                    },
//                    targetEvent: event,
//                    title: 'Add a comment',
//                    validators: {
//                        'md-maxlength': 30
//                    }
//                };

//                var promise;

//                if ($scope.options.largeEditDialog) {
//                    promise = $mdEditDialog.large(editDialog);
//                } else {
//                    promise = $mdEditDialog.small(editDialog);
//                }

//                promise.then(function (ctrl) {
//                    var input = ctrl.getInput();

//                    input.$viewChangeListeners.push(function () {
//                        input.$setValidity('test', input.$modelValue !== 'test');
//                    });
//                });
//            };

//            $scope.toggleLimitOptions = function () {
//                $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
//            };

//            $scope.getTypes = function () {
//                return ['Candy', 'Ice cream', 'Other', 'Pastry'];
//            };

//            $scope.loadStuff = function () {
//                $scope.promise = $timeout(function () {
//                    // loading
//                }, 2000);
//            }

//            $scope.logItem = function (item) {
//                console.log(item.name, 'was selected');
//            };

//            $scope.logOrder = function (order) {
//                console.log('order: ', order);
//            };

//            $scope.logPagination = function (page, limit) {
//                console.log('page: ', page);
//                console.log('limit: ', limit);
//            }
//        }]);

app.controller('indexCtrl', function ($scope, $timeout, $mdSidenav, $log, $mdDialog) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function () {
        return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                  $log.debug("toggle " + navID + " is done");
              });
        }, 200);
    }

    function buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                  $log.debug("toggle " + navID + " is done");
              });
        }
    }

    //Left Menu Items
    var imagePath = 'img/list/60.jpeg';
    var imagePath = '/asset/map-icons/src/icons/';
    $scope.phones = [
      {
          type: 'Home',
          number: '(555) 251-1234',
          options: {
              icon: 'communication:phone'
          }
      },
      {
          type: 'Cell',
          number: '(555) 786-9841',
          options: {
              icon: 'communication:phone',
              avatarIcon: true
          }
      },
      {
          type: 'Office',
          number: '(555) 314-1592',
          options: {
              face: imagePath
          }
      },
      {
          type: 'Offset',
          number: '(555) 192-2010',
          options: {
              offset: true,
              actionIcon: 'communication:phone'
          }
      }
    ];
    $scope.todos = [
      {
          face: imagePath + 'funeral-home.svg' ,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " Home",
          //text:"Home",
          //url: "#Home",
          url: "home",
          //url: "index",
          img: "home"
      },
      {
          face: '/asset/demos/input/demoIcons/icons/ic_person_24px.svg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " Register",
          //text: "Student",
          //url: "#student",
          url: "student",
          img: "note_add"
      },
      {
          face: '/asset/demos/input/demoIcons/icons/ic_person_24px.svg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " Search",
          //text: "Search",
          //url: "#student",
          url: "search",
          img: "note_add"
      },
      {
          face: '/asset/demos/input/demoIcons/icons/ic_person_24px.svg',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " TestStudentList",
          //text: "Search",
          //url: "#student",
          url: "searchList",
          img: "note_add"
      },
    ];

    $scope.settings = [
    { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
    { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
    ];
})
app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
          .then(function () {
              $log.debug("close LEFT is done");
          });

    };
})
app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function () {
          // Component lookup should always be available since we are not using `ng-if`
          $mdSidenav('right').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
      };
  });