'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('densitivity', {
        url: '/densitivity',
        templateUrl: 'app/admin/densitivity/densitivity.html',
        controller: 'DensitivityCtrl',
        authenticate: true
      });
  });
