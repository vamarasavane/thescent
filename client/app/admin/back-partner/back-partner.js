'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('back-partner', {
        url: '/back-partner',
        templateUrl: 'app/admin/back-partner/back-partner.html',
        controller: 'BackPartnerCtrl',
        authenticate: true
      });
  });
