//angular.module('testAng')

//angular.module('testAng', ['ngMaterial'])
//.controller('studentController', function ($scope, $timeout, $mdSidenav, $log, $mdDialog, studentDataService) {
//.controller('studentController', function ($scope, $rootScope, $timeout, studentDataService, $http, $routeParams, $location, $filter) {

//    //Add Student
//    var addStudent = function () {
//        debugger;
//        var objStudent = {};
//        objStudent.NM_FIRST = "Mohammed";
//        var student = studentDataService.Registration.saveStudentData(objStudent);
//        student.$promise.then(function () {
//            debugger;
//        })
//    }

//})

//angular.module('testAng')
angular.module('testApp')
//.controller('studentController', function ($scope, $rootScope, $timeout, $mdSidenav, $log,$mdDialog, $http, $routeParams, $location) {
  .controller('studentController', function ($scope, $log, studentDataService) {
      $scope.registerUser = function (objStudent) {
          var studentDetails = {};
          studentDetails = $scope.bindUser(objStudent);
          var student = studentDataService.Registration.saveStudentData(studentDetails);
          student.$promise.then(function () {
          });
          var mul = studentDataService.multiply;
          console.log(mul);//this returns function as string as expected to return multiplicaion of two no. Need to check this
      }

      $scope.addStudent = function (objStudent) {
          var studentDetails = {};
          studentDetails = $scope.bindUser(objStudent);
          var student = studentDataService.AddStudent.addStudentData(studentDetails);
          student.$promise.then(function () {
          });
          var mul = studentDataService.multiply;
          console.log(mul);//this returns function as string as expected to return multiplicaion of two no. Need to check this
      }

      //Gender
      $scope.person = ('Select Male Female Other').split(' ').map(function (gender) {
          return { Value: gender };
      });
      //$scope.states = ('Select AP Telangana Other').split(' ').map(function (abbrev) {
      //    return { Value: abbrev };
      //});
      $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
   'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
   'WY').split(' ').map(function (state) {
       return { abbrev: state };
   });
      $scope.bindUser = function (user) {
          debugger;
          var User = {};          
          User = {
              FirstName: user.firstName,
              LastName: user.lastName,
              MiddlerName: user.middleName,                            
              UserAddress: {
                  Address: user.address,
                  Address2: user.address2,
                  City: user.city,
                  State: user.state,
                  Country:'India',//user.country == null ? 'India' : user.country,
                  Zip: user.postalCode,
              },
              UserDocuments: null,
              UserContact: {
                  Phone :user.phone,
                  Mobile :user.mobile,
                  Office :user.office
              },
              //Age: user.age,
              Gender: user.gender == "MALE" ? 1 : 2,
              DateOfBirth: user.dob,
              Class: "I",
              FatherName: user.fatherName
              //Description: user.description,
              //SpouseOrFatherDetails: {
              //    FatherName: user.fatherName,
              //    MotherName: user.motherName,
              //    GuardianName: user.guardianName,
              //    Occupation: user.occupationName
              //},
          }
          return User;
      };
  });
