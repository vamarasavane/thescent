'use strict';

angular.module('thescentApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gender', {
        url: '/gender',
        templateUrl: 'app/admin/gender/gender.html',
        controller: 'GenderCtrl',
        authenticate: true
      });
  });
