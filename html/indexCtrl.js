
//angular.module('testAng', ['ngMaterial','ngRoute'])
angular.module('testAng')
  .controller('indexCtrl', function ($scope, $timeout, $mdSidenav, $log, $mdDialog) {
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
            text:"Home",
            url: "#Home",
            img: "home"
        },
        {
            face: '/asset/demos/input/demoIcons/icons/ic_person_24px.svg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " Register",
            text: "Student",
            url: "#student",
            img: "note_add"
        },        
      ];


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