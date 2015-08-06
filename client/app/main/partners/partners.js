'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('partners', {
        url: '/partners',
        templateUrl: 'app/main/partners/partners.html',
        controller: 'PartnersCtrl'
      });
  });