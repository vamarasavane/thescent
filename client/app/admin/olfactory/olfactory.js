'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('olfactory', {
        url: '/olfactory',
        templateUrl: 'app/admin/olfactory/olfactory.html',
        controller: 'OlfactoryCtrl',
        authenticate: true
      });
  });
