
angular.module('testApp')
.controller('nutritionController', function ($mdEditDialog, $q, $scope, $timeout, $rootScope, studentDetailsService, studentsList, studentDataService) {
    'use strict';
    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];

    $scope.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    };

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };
   
   //data moved 
    var count = 10;
    var desserts = function (count) {
        
        //var obj = studentDetailsService.desserts(1);
        var criteria = {
            "firstName":"Mohammed",
            "lastName": "Zaker",
            "parentName": "1",
            "rollNo":1
        };
        //criteria.FirstName = "Mohammed";
        //criteria.LastName = "Zaker";
        debugger
        //var request = dataService.Admin.getUserPopUpDetails({ "personId": userdata.PersonId, "personVersionId": userdata.PersonVersionId, "memberId": userdata.MemberId, "memberVersionId": userdata.MemberVersionId });

        var studentsList = studentDataService.GetStudentsList.searchStudent({ "FirstName": criteria.firstName, "LastName": criteria.lastName, "ParentName": criteria.parentName,"RollNo":criteria.rollNo });
        studentsList.$promise.then(function (data) {
            //injecting data to service
            studentsList.passData(data);
        });
       
        //$scope.desserts = studentDetailsService.desserts(count);
       // $scope.desserts = obj; console.log('hi there'); console.log(obj.name);
    }
    desserts(count);
    $scope.editComment = function (event, dessert) {
        event.stopPropagation(); // in case autoselect is enabled                
        var editDialog = {
            modelValue: dessert.comment,
            placeholder: 'Add a comment',
            save: function (input) {
                if (input.$modelValue === 'Donald Trump') {
                    input.$invalid = true;
                    return $q.reject();
                }
                if (input.$modelValue === 'Bernie Sanders') {
                    return dessert.comment = 'FEEL THE BERN!'
                }
                dessert.comment = input.$modelValue;
            },
            targetEvent: event,
            title: 'Add a comment',
            validators: {
                'md-maxlength': 30
            }
        };

        var promise;

        if ($scope.options.largeEditDialog) {
            promise = $mdEditDialog.large(editDialog);
        } else {
            promise = $mdEditDialog.small(editDialog);
        }

        promise.then(function (ctrl) {
            var input = ctrl.getInput();

            input.$viewChangeListeners.push(function () {
                input.$setValidity('test', input.$modelValue !== 'test');
            });
        });
    };

    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
    };

    $scope.getTypes = function () {
        return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    };

    $scope.loadStuff = function () {
        $scope.promise = $timeout(function () {
            // loading
        }, 2000);
    }

    $scope.logItem = function (item) {
        console.log(item.name, 'was selected');
    };

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }

    $scope.$on('someEvent', function () {
        debugger
        $scope.$parent.msg = $scope.get();
    })
    $scope.get = function () {
        console.log('hi child scope');
        $rootScope.desserts = {
            "count": 9,
            "data": [
              {
                  "name": "Frozen yogurt",
                  "type": "Ice cream",
                  "calories": { "value": 159.0 },
                  "fat": { "value": 6.0 },
                  "carbs": { "value": 24.0 },
                  "protein": { "value": 4.0 },
                  "sodium": { "value": 87.0 },
                  "calcium": { "value": 14.0 },
                  "iron": { "value": 1.0 }
              }
            ]
        };
    }

    $scope.loadSingleStudent = function (count) {
        desserts(count);
    }
    ///This will check if a change occurs in model then get the change and update the model..
    //Commenting for now to get some alternate code.
    //$scope.$watch(function () {        
    //   // if ($rootScope.studentCount)
    //        return studentDetailsService.desserts($rootScope.studentCount)
    //    //else
    //    //    return studentDetailsService.desserts($rootScope.studentCount)
    //}, function (newList, oldList) {        
    //    $scope.desserts = newList;
    //})

    //This 
    $scope.$on('studentInfo', function () {
        debugger;
        var array = [];
        var objStudent = JSON.stringify(studentsList.values);
        //for (var item in studentsList.values)
        //{
        //    var temp = {};
        //    temp["firstName"] = item["firstName"];
        //    array.push(temp);
        //}
        var temp = {};
        temp.firstName = studentsList.values.firstName;//objStudent.firstName;
        array.push(temp);
        $scope.desserts = array;
    })













    //$scope.desserts = {
    //    "count": 9,
    //    "data": [
    //      {
    //          "name": "Frozen yogurt",
    //          "type": "Ice cream",
    //          "calories": { "value": 159.0 },
    //          "fat": { "value": 6.0 },
    //          "carbs": { "value": 24.0 },
    //          "protein": { "value": 4.0 },
    //          "sodium": { "value": 87.0 },
    //          "calcium": { "value": 14.0 },
    //          "iron": { "value": 1.0 }
    //      }, {
    //          "name": "Ice cream sandwich",
    //          "type": "Ice cream",
    //          "calories": { "value": 237.0 },
    //          "fat": { "value": 9.0 },
    //          "carbs": { "value": 37.0 },
    //          "protein": { "value": 4.3 },
    //          "sodium": { "value": 129.0 },
    //          "calcium": { "value": 8.0 },
    //          "iron": { "value": 1.0 }
    //      }, {
    //          "name": "Eclair",
    //          "type": "Pastry",
    //          "calories": { "value": 262.0 },
    //          "fat": { "value": 16.0 },
    //          "carbs": { "value": 24.0 },
    //          "protein": { "value": 6.0 },
    //          "sodium": { "value": 337.0 },
    //          "calcium": { "value": 6.0 },
    //          "iron": { "value": 7.0 }
    //      }, {
    //          "name": "Cupcake",
    //          "type": "Pastry",
    //          "calories": { "value": 305.0 },
    //          "fat": { "value": 3.7 },
    //          "carbs": { "value": 67.0 },
    //          "protein": { "value": 4.3 },
    //          "sodium": { "value": 413.0 },
    //          "calcium": { "value": 3.0 },
    //          "iron": { "value": 8.0 }
    //      }, {
    //          "name": "Jelly bean",
    //          "type": "Candy",
    //          "calories": { "value": 375.0 },
    //          "fat": { "value": 0.0 },
    //          "carbs": { "value": 94.0 },
    //          "protein": { "value": 0.0 },
    //          "sodium": { "value": 50.0 },
    //          "calcium": { "value": 0.0 },
    //          "iron": { "value": 0.0 }
    //      }, {
    //          "name": "Lollipop",
    //          "type": "Candy",
    //          "calories": { "value": 392.0 },
    //          "fat": { "value": 0.2 },
    //          "carbs": { "value": 98.0 },
    //          "protein": { "value": 0.0 },
    //          "sodium": { "value": 38.0 },
    //          "calcium": { "value": 0.0 },
    //          "iron": { "value": 2.0 }
    //      }, {
    //          "name": "Honeycomb",
    //          "type": "Other",
    //          "calories": { "value": 408.0 },
    //          "fat": { "value": 3.2 },
    //          "carbs": { "value": 87.0 },
    //          "protein": { "value": 6.5 },
    //          "sodium": { "value": 562.0 },
    //          "calcium": { "value": 0.0 },
    //          "iron": { "value": 45.0 }
    //      }, {
    //          "name": "Donut",
    //          "type": "Pastry",
    //          "calories": { "value": 452.0 },
    //          "fat": { "value": 25.0 },
    //          "carbs": { "value": 51.0 },
    //          "protein": { "value": 4.9 },
    //          "sodium": { "value": 326.0 },
    //          "calcium": { "value": 2.0 },
    //          "iron": { "value": 22.0 }
    //      }, {
    //          "name": "KitKat",
    //          "type": "Candy",
    //          "calories": { "value": 518.0 },
    //          "fat": { "value": 26.0 },
    //          "carbs": { "value": 65.0 },
    //          "protein": { "value": 7.0 },
    //          "sodium": { "value": 54.0 },
    //          "calcium": { "value": 12.0 },
    //          "iron": { "value": 6.0 }
    //      }
    //    ]
    //};
    //console.log($scope.desserts);
});