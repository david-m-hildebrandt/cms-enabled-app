/**
 * Created by David on 2015-06-15.
 */
'use strict';

angular.module('myApp.filters.locale-filter', [])

    .filter('locale', [function() {

        return function(resource, language) {
            if (language === 'fr') {
                return resource.fr;
            }
            return resource.en;
        };
    }]);