'use strict';

/**
 * @ngdoc function
 * @name pumpWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pumpWebApp
 */
angular.module('pumpWebApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.courses = [
      {
        'id': 10,
        'name': 'provalocale',
        'description': 'provalocaledescrizione',
      }
    ];

    /**
     * Courses loading through rest
     */

    $http.get('http://localhost:8000/rest/course/?format=json')
      .success(function (data) {

        $scope.courses = data;

      });

  });

