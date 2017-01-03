//angular.module('testAng')
    //.factory('studentDataService', function ($resource) {
    //    //var serviceUrl = SharedService.serviceUrl + "/";
    //    var serviceUrl =  "";
    //    var header = "{Content-Type:application/x-www-form-urlencoded;charset=UTF-8}";
    //    //var header = "{Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8}"
    //    return {
    //        Common: $resource('', '/CommonService/', {}, {
    //            saveStudentData: { method: 'POST', url: serviceUrl + '/Student/AddStudent', headers: header }
    //        }),
    //        Registration: $resource('', '/StudentRegistration', {}, {
    //            saveStudentData: { method: 'POST', url: serviceUrl + '/StudentRegistration/AddStudent', headers: header, isArray: true }
    //        }),

    //    }
//});

//angular.module('testAng')
angular.module('testApp')
.factory('studentDataService', function ($resource) {
    var serviceUrl = "http://localhost:49192/api";
    var header = "{Content-Type:application/x-www-form-urlencoded;charset=UTF-8}";
    return {
        
        multiply: function () {
            return 5 * 7;
        },
        Common: $resource('' + '/CommonService/', {}, {
            saveStudentData: { method: 'GET', url: '/Student/AddStudent', headers: header }
        }),
        Registration: $resource('' + '/StudentRegistration', {}, {
            saveStudentData: { method: 'POST', url: serviceUrl + '/Registration/RegisterStudent', headers: header, isArray: true }
        }),
        AddStudent: $resource('' + '/StudentRegistration', {}, {
            addStudentData: { method: 'POST', url: serviceUrl + '/Registration/AddStudent', headers: header, isArray: true }
        }),
        SearchStudent: $resource('' +'/SearchStudent', {}, {
            getStudent: { method: 'GET', url: serviceUrl + '/StudentSearch/GetStudent', headers: header}
        }),
        GetStudentsList: $resource('' + '/GetStudents', {}, {
   //getUserPopUpDetails: { method: 'GET', url: serviceUrl + "Admin/GetUserDetailInformation?personId=:personId&personVersionId=:personVersionId&memberId=:memberId&memberVersionId=:memberVersionId", isArray: true },
            //searchStudent:{method:'GET',url:serviceUrl+'/StudentSearch/GetStudentsList?FirstName=:firstName&LastName=:lastName&ParentName=:parentName&RollNo=rollNo',headers:header,isArray:true}
            searchStudent: { method: 'GET', url: serviceUrl + '/StudentSearch/GetStudentsList', headers: header, isArray: true }
        }),
        FileUpload: $resource('' + '/FileUpload', {}, {
            updateImage: { method: "POST", url:  "http://localhost:49192/api/FileUpload/UploadFile", cache: false, headers: { 'Content-Type': undefined } },

        })

    }
});