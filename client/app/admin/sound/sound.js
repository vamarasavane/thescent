'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sound', {
        url: '/sound',
        templateUrl: 'app/admin/sound/sound.html',
        controller: 'SoundCtrl',
        authenticate: true
      });
  });
