'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('level', {
        url: '/level',
        templateUrl: 'app/admin/level/level.html',
        controller: 'LevelCtrl',
        authenticate: true
      });
  });
