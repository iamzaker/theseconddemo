
angular.module('testApp')
.controller('searchController', function ($scope, $rootScope, commonService, $timeout, $q, $log, studentDetailsService, studentsList, studentDataService) {
    $scope.search = function (user) {
        var student = {};
        student.FirstName = user.firstName;
        student.LastName = user.lastName;

        var objStudent = commonService.Search.searchStudent(student);
        objStudent.$promise.then(function (data) {
            if (data != null) {
                data = JSON.parse(JSON.stringify(data));
                angular.forEach(data.$values, function (value, key) {

                    console.log(value.firstName + ' ' + key);
                })
                $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                 $state.current = toState;
                })
                
            }
        }, function (err) {
            console.log(err); alert('Something went Wrong');
        });
       // console.log(user);
    }

    
    //AutoComplete starts here
    var self = this;

    self.simulateQuery = false;
    self.isDisabled = false;

    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;

    self.newState = newState;



    function newState(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

   
    //Custom logic
    function querySearch(query) {
        var student = {};
        student.FirstName = query;
        //student.LastName = user.lastName;
        var results = "";
        if (query != "") {
            results = commonService.Search.searchStudent(student);
            results.$promise.then(function (data) {
                debugger
                var array = [];
                if (data != null) {
                    data = JSON.parse(JSON.stringify(data));
                    angular.forEach(data.$values, function (value, key) {
                        array.push(value.firstName);
                        console.log(value.firstName + ' ' + key);
                    })
                }
            }, function (err) {
                console.log(err); alert('Something went Wrong');
            });
        } else {
            return false;
        }
        return results;
    }

    self.data = null;
    self.selectedItem = null;
    self.searchText = null;

    self.querySearchStudent = function (query) {debugger
        var student = {};
        student.FirstName = query; var array = []; var objArray = []; var i = 0;
        if (query != "") {
          var  obj = commonService.Search.searchStudent(student);
          obj.$promise.then(function (result) {  debugger                             
                if (result != null) {
                    result = JSON.parse(JSON.stringify(result));
                    angular.forEach(result.$values, function (value, key) {
                        array.push(value.firstName + ' ' + value.lastName);
                        var objStudent = { text: value.firstName + ' ' + value.lastName, value: value.id };
                        objArray.push(objStudent); 
                        //console.log(i);
                        
                        //console.log(objArray[i].value + ' ' + objArray[i].text);
                        ++i;
                    })
                    self.data = objArray;
                    return self.data;
                }

            }, function (err) {
                console.log(err); alert('Something went Wrong');
            });          
        }
        //self.data = array;        
        self.data = objArray;
        //for (i = 0; i < objArray.length; i++) {
        //    console.log(objArray[i].text + ' ' + objArray[i].value);
        //}
        //console.log("Data in objArray");
        //console.log(objArray);
        //console.log("Data in self.data")
        //console.log(self.data);
        return self.data;
    }
    //ends here


    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        debugger;
       ;

        var studentInfo = studentDataService.SearchStudent.getStudent({ id: item });
        studentInfo.$promise.then(function (data) {
            studentsList.passData(data); //passing data to service once promise is fulfilled.
        });
        
    }    
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

        return allStates.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }
    
});

//function DemoCtrl($timeout, $q, $log) {
   
//}