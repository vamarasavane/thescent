'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sensitivity', {
        url: '/sensitivity',
        templateUrl: 'app/admin/sensitivity/sensitivity.html',
        controller: 'SensitivityCtrl',
        authenticate: true
      });
  });
