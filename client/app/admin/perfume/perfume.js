'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('perfume', {
        url: '/perfume',
        templateUrl: 'app/admin/perfume/perfume.html',
        controller: 'PerfumeCtrl',
        authenticate: true
      });
  });
