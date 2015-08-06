'use strict';

angular.module('thescentApp')
  .controller('BackAboutCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'about',
      'link': '/back-about'
    }];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.message = 'under construction ... ';


  });
