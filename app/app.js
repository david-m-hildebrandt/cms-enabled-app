'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.views.account-overview',
    'myApp.cms-resource-controller',
    'myApp.cms-resource',
    'myApp.cms-resource-url',
    'myApp.cms-resource-banner',
    'myApp.filters.locale-filter'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
