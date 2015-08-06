'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wake', {
        url: '/wake',
        templateUrl: 'app/admin/wake/wake.html',
        controller: 'WakeCtrl',
        authenticate: true
      });
  });
