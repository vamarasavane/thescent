'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('light', {
        url: '/light',
        templateUrl: 'app/admin/light/light.html',
        controller: 'LightCtrl',
        authenticate: true
      });
  });
