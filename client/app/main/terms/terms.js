'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('terms', {
        url: '/terms',
        templateUrl: 'app/main/terms/terms.html',
        controller: 'TermsCtrl'
      });
  });