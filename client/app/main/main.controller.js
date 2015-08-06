'use strict';

angular.module('thescentApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

    var experiment = 0;

    $scope.experimenttexture = function(){

      experiment = 1;
    };

    $scope.experimentcolor = function(){

      experiment = 2;
    };

    $scope.experimenttaste = function(){

      experiment = 3;
    };

    $scope.experimentsound = function(){

      experiment = 4;
    };

    $scope.experimentplace = function(){

      experiment = 5;
    };

    $scope.experimentgender = function(){

      experiment = 6;
    };

    $scope.exp = experiment;

  });
