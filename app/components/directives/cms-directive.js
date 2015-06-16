'use strict';



angular.module('myApp.cms-resource', []).directive('cmsResource', function () {
    return {
        restrict: 'EA',
        scope: {
            resource: '=key',
            language: '='
        },
        template: '{{resource | locale : language }}'
    };
});

angular.module('myApp.cms-resource-url', []).directive('cmsResourceUrl', function () {
    return {
        restrict: 'EA',
        scope: {
            resource: '=key',
            language: '='
        },
        templateUrl: 'components/directives/cms-resource-url.html'
    };

});


angular.module('myApp.cms-resource-banner', []).directive('cmsResourceBanner', function () {
    return {
        restrict: 'EA',
        scope: {
            resource: '=key',
            language: '='
        },
        templateUrl: 'components/directives/cms-resource-banner.html'
    };

});

