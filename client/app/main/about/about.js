'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about/about.html',
        controller: 'AboutCtrl'
      });
  });