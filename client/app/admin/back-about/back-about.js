'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('back-about', {
        url: '/back-about',
        templateUrl: 'app/admin/back-about/back-about.html',
        controller: 'BackAboutCtrl',
        authenticate: true
      });
  });
