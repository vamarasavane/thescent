'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('experiment', {
        url: '/experiment',
        templateUrl: 'app/main/experiment/experiment.html',
        controller: 'ExperimentCtrl'
      });
  });