/**
 * Created by David on 2015-06-15.
 */
'use strict';

angular.module('myApp.views.account-overview', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/account-overview', {
            templateUrl: 'views/account-overview/account-overview.html',
            controller: 'AccountOverviewCtrl'
        });
    }])

    .controller('AccountOverviewCtrl', ['$scope', function ($scope) {
        $scope.balance = 25.00;
    }]);