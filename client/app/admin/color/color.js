'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('color', {
        url: '/color',
        templateUrl: 'app/admin/color/color.html',
        controller: 'ColorCtrl',
        authenticate: true
      });
  });
