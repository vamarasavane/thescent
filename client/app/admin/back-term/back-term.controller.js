'use strict';

angular.module('thescentApp')
  .controller('BackTermCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'term',
      'link': '/back-term'
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
