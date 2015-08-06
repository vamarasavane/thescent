'use strict';

angular.module('thescentApp')
  .controller('AdminCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'backoffice',
      'link': '/admin'
    }];

    $scope.isCollapsed = true;
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


    $scope.mySelections = [];

    var refreshPerfume = function () {
      $http.get('/api/perfumes').success(function (response) {
        $scope.listPerfumes = response;
        $scope.mySelections = $scope.listPerfumes;
        $scope.perfume = "";
        socket.syncUpdates('perfume', $scope.listPerfumes = response);

      });

    }



    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var id_picture = 0 + slides.length + 1;
      slides.push({
        image: 'assets/images/parfum-' + id_picture + '.jpg',
        text: ['black opium ','flower bomb','polo blue','victor rolf'][slides.length % 4] + ' ' +
        ['l\'oreal', 'l\'oreal', 'l\'oreal', 'l\'oreal'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }





  });
