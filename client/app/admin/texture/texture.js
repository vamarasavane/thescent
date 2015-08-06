'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('texture', {
        url: '/texture',
        templateUrl: 'app/admin/texture/texture.html',
        controller: 'TextureCtrl',
        authenticate: true
      });
  });
