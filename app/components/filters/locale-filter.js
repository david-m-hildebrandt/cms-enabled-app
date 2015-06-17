/**
 * Created by David on 2015-06-15.
 */
'use strict';

angular.module('myApp.filters.locale-filter', [])

    .filter('locale', ['$sce', function ($sce) {

        return function (resource, language, property) {

            if (property) {
                if (property === 'videoLink') {
                    if (language === 'fr') {
                        return $sce.trustAsResourceUrl(resource.fr[property]);
                    }
                    return $sce.trustAsResourceUrl(resource.en[property]);
                } else {
                    if (language === 'fr') {
                        return resource.fr[property];
                    }
                    return resource.en[property];
                }
            } else {
                if (language === 'fr') {
                    return resource.fr;
                }
                return resource.en;
            }
        };

    }])
