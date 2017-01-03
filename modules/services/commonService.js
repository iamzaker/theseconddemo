
//angular.module('testApp')
//    .factory('commonService', commonService);

//function commonService($resource) {

//    var serviceUrl = "http://localhost:49192/api";
//    var header = "{Content-Type:application/x-www-form-urlencoded;charset=UTF-8}";

//    return {
//        Common: $resource('', '/CommonService/Search', {}, {
//            SearchData: { method: 'GET', url:serviceUrl + '/Public/SearchStudent', headers: header }
//        }),
//    }

//}

//angular.module('testApp')
//    .factory('commonService', function ($resource) {

//        var serviceUrl = "http://localhost:49192/api";
//        var header = "{Content-Type:application/x-www-form-urlencoded;charset=UTF-8}";

//        return {
//            Common: $resource('', '/CommonService', {}, {
//                SearchData: { method: 'GET', url: serviceUrl + '/Common/Search/SearchStudent', headers: header }
//            }),
//            Registration: $resource('' + '/StudentRegistration', {}, {
//                saveStudentData: { method: 'POST', url: serviceUrl + '/Registration/RegisterStudent', headers: header, isArray: true }
//            }),
//        }

//    });

angular.module('testApp')
.factory('commonService', function ($resource) {
    var serviceUrl = "http://localhost:49192/api";
    var header = "{Content-Type:application/x-www-form-urlencoded;charset=UTF-8}";
    return {
        //Common keyword not working here ??
        Search: $resource(''+ '/CommonService', {}, {
            searchStudent: { method: 'GET', url: serviceUrl + '/Search/SearchStudent', headers: header }
        }),
        Registration: $resource('' + '/StudentRegistration', {}, {
            searchData: { method: 'POST', url: serviceUrl + '/Registration/RegisterStudent', headers: header, isArray: true }
        }),
        AddStudent: $resource('' + '/StudentRegistration', {}, {
            searchData: { method: 'POST', url: serviceUrl + '/Registration/AddStudent', headers: header, isArray: true }
        }),
        FileUpload: $resource('' + '/FileUpload', {}, {
            updateImage: { method: "POST", url: "http://localhost:49192/api/FileUpload/UploadFile", cache: false, headers: { 'Content-Type': undefined } },

        })

    }
});