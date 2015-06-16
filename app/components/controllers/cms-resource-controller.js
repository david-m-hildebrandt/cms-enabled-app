/**
 * Created by David on 2015-06-16.
 */
'use strict';

angular.module('myApp.cms-resource-controller', [])

    .controller('CmsResourceCtrl', ['$scope', function ($scope) {
        $scope.first = {'en': 'English first', 'fr': 'French first'};
        $scope.second = {'en': 'English second', 'fr': 'French second'};

        $scope.resource = {
            'accountOverview_salutation_lineOne': {
                'en': 'Thanks for stopping by.',
                'fr': 'Merci de votre visite!'
            },
            'accountOverview_salutation_lineTwo': {
                'en': 'If you want to view your usage, billing or account details, you\u0027ve come to the right place.',
                'fr': 'Si vous voulez v\u00e9rifier votre utilisation, votre facture ou les d\u00e9tails de votre compte, vous \u00eates au bon endroit.'
            }
        };
        $scope.resourceUrl = {
            'accountOverview_salutation_lineThree': {
                'en': {
                    'beforeLinkText': 'Upgrade you smartphone',
                    'linkText': 'here',
                    'afterLinkText': ".",
                    'url': "https://www.rogers.com/web/myrogers/device-upgrade"
                },
                'fr': {
                    'beforeLinkText': 'Rehaussez votre t\u00e9l\u00e9phone intelligent',
                    'linkText': 'ici',
                    'afterLinkText': "!",
                    'url': "https://www.rogers.com/web/myrogers/device-upgrade"
                }
            }
        }

        $scope.resourceBanner = {
            'accountOverview_banner_top': {
                'en': {
                    'imageSource': 'https://www.rogers.com/web/totes/images/roam-EN-HD.jpg',
                    'url': "http://www.rogers.com/consumer/wireless/travel"
                },
                'fr': {
                    'imageSource': 'https://www.rogers.com/web/totes/images/roam-FR-HD.jpg',
                    'url': "http://www.rogers.com/consumer/wireless/travel?setLanguage=fr"
                },
            }
        }

        $scope.language = 'fr';

    }]);