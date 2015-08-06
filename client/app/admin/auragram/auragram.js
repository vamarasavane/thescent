'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auragram', {
        url: '/auragram',
        templateUrl: 'app/admin/auragram/auragram.html',
        controller: 'AuragramCtrl'
      });
  });