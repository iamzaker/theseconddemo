//angular.module('anchorUrl', function ($location) {
//    debugger
//    return function (scope, element, attrs) {
//        var path;
//        attrs.$observe('anchorUrl', function (val) {
//            path = val;
//        })
//        element.bind('click', function () {
//            scope.$apply(function () {
//                $location.path(path);
//            });
//        });
//    };
//});

angular.module('testAng')
.directive('chooseFile', function () {
    return {
        link: function (scope, elem, attrs) {
            var button = elem.find('button');
            var input = angular.element(elem[0].querySelector('input#fileInput'));

            button.bind('click', function () {
                input[0].click();
            });

            input.bind('change', function (e) {
                scope.$apply(function () {
                    var files = e.target.files;
                    if (files[0]) {
                        scope.fileName = files[0].name;
                    } else {
                        scope.fileName = null;
                    }
                });
            });
        }
    };
});