'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('back-help', {
        url: '/back-help',
        templateUrl: 'app/admin/back-help/back-help.html',
        controller: 'BackHelpCtrl',
        authenticate: true
      });
  });
