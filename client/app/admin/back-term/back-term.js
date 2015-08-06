'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('back-term', {
        url: '/back-term',
        templateUrl: 'app/admin/back-term/back-term.html',
        controller: 'BackTermCtrl',
        authenticate: true
      });
  });
