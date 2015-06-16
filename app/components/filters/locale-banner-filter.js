/**
 * Created by David on 2015-06-15.
 */
'use strict';

angular.module('myApp.filters.locale-banner-filter', [])

    .filter('bannerImageSource', [function () {
        return function (resource, language) {
            if (language === 'fr') {
                return resource.fr.imageSource;
            }
            return resource.en.imageSource;
        };
    }])

    .filter('bannerImageHref', [function () {
        return function (resource, language) {
            if (language === 'fr') {
                return resource.fr.href;
            }
            return resource.en.href;
        };
    }])
