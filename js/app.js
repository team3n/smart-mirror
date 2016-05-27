// Bootstrap Angular
(function(angular) {
    'use strict';

    angular.module('SmartMirror', ['ngAnimate', 'tmh.dynamicLocale', 'pascalprecht.translate'])
        .config(function(tmhDynamicLocaleProvider) {
            var locale = config.language.toLowerCase();
            tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_' + locale + '.js');
        })
        
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider
                .uniformLanguageTag('bcp47')
                .useStaticFilesLoader({
                    prefix: 'locales/',
                    suffix: '.json'
                });
            $translateProvider.useSanitizeValueStrategy(null);
            // Avoiding the duplicity of the locale for the default language, xx-YY -> xx
            // We are considering only the language
            // Please refer https://github.com/evancohen/smart-mirror/pull/179 for further discussion
            var language = config.language.substring(0, 2);
            $translateProvider.preferredLanguage(language);
        }])
        
        .config(["$sceDelegateProvider", function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                "http://www.youtube.com/embed/**"
            ]);
        }]);

}(window.angular));
