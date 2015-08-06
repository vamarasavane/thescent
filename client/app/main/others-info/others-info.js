'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('others-info', {
        url: '/others-info',
        templateUrl: 'app/main/others-info/others-info.html',
        controller: 'OthersInfoCtrl'
      });
  });