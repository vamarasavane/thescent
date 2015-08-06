'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('place', {
        url: '/place',
        templateUrl: 'app/admin/place/place.html',
        controller: 'PlaceCtrl',
        authenticate: true
      });
  });
