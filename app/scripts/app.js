'use strict';

/**
 * @ngdoc overview
 * @name pumpWebApp
 * @description
 * # pumpWebApp
 *
 * Main module of the application.
 */
angular
  .module('pumpWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($httpProvider) {
    /**
     * $http configuration for Cross Origin Request Forgery
     */

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.useXDomain = true;

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
