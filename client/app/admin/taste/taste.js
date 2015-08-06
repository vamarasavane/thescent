'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('taste', {
        url: '/taste',
        templateUrl: 'app/admin/taste/taste.html',
        controller: 'TasteCtrl',
        authenticate: true
      });
  });
