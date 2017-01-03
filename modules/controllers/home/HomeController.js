
angular
  //.module('testAng', ['ngMaterial'])
    .module('testAng')
  .controller('HomeCtrl', function ($scope, $timeout, $mdSidenav, $log, $mdDialog) {
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

      //Dialog box logic comes here...
      $scope.status = '  ';
      $scope.customFullscreen = false;

      $scope.showTabDialog = function(ev) {
          $mdDialog.show({
              //controller: DialogController,
              controller:'studentController',
              templateUrl: 'Student/Create.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true
          })
              .then(function(answer) {
                  $scope.status = 'You said the information was "' + answer + '".';
              }, function() {
                  $scope.status = 'You cancelled the dialog.';
              });
      };

      $scope.showPrerenderedDialog = function(ev) {
          $mdDialog.show({
              controller: DialogController,
              contentElement: '#myDialog',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true
          });
      };

      function DialogController($scope, $mdDialog) {
          $scope.hide = function () {
              $mdDialog.hide();
          };

          $scope.cancel = function () {
              $mdDialog.cancel();
          };

          $scope.answer = function (answer) {
              $mdDialog.hide(answer);
          };
      }


      //Logic for ADD comes here
      $scope.addStudent = function () {


      }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function () {
          // Component lookup should always be available since we are not using `ng-if`
          $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });

      };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function () {
          // Component lookup should always be available since we are not using `ng-if`
          $mdSidenav('right').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
      };
  });