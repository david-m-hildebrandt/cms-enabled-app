/**
 * Created by David on 2015-06-15.
 */
'use strict';

angular.module('myApp.filters.locale-url-filter', [])

    .filter('urlBeforeLinkText', [function () {
        return function (resource, language) {
            if (language === 'fr') {
                return resource.fr.beforeLinkText;
            }
            return resource.en.beforeLinkText;
        };
    }])

    .filter('urlHref', [function () {
        return function (resource, language) {
            console.log('resource.fr.url: ' + resource.fr.url);
            if (language === 'fr') {
                return resource.fr.url;
            }
            return resource.en.url;
        };
    }])
    .filter('urlLinkText', [function () {
        return function (resource, language) {
            if (language === 'fr') {
                return resource.fr.linkText;
            }
            return resource.en.linkText;
        };
    }])
    .filter('urlAfterLinkText', [function () {
        return function (resource, language) {
            if (language === 'fr') {
                return resource.fr.afterLinkText;
            }
            return resource.en.afterLinkText;
        };
    }])