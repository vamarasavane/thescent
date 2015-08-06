'use strict';

angular.module('thescentApp')
  .controller('SearchCtrl',
  ['perfumeService', '$scope','$location' , function (perfumes,$scope,$location) {



    //page message
    $scope.message = 'please enter the name of experience ...';
    $scope.typeSearch = 'type : brand , gender , color , place , light , sensitivity , density , olfactory , wake';
    $scope.searchMessage = 'looking for a perfume?';
    $scope.buttonLabel = 'looking';
    //sample perfumes data
    var perfume_1 = {name : "black opium", thumb :"assets/images/parfum-1.jpg", brand:"", price:40 , shoplink : ""};
    var perfume_2 = {name : "flower bomb", thumb :"assets/images/flowerbomb.jpg", brand:"", price:40 , shoplink : ""};
    var perfume_3 = {name : "polo blue", thumb :"assets/images/polo-blue.jpg", brand:"", price:40 , shoplink : ""};
    var perfume_4 = {name : "victor rolf", thumb :"assets/images/viktor-rolf.jpg", brand:"", price:40 , shoplink : ""};

    $scope.perfumes = [perfume_1,perfume_2,perfume_3,perfume_4];


    $scope.isActive = function(route) {
      return route === $location.path();
    };

    var initChoices = [
      "juteux",
      "onctueux",
      "dur",
      "femme",
      "sucré",
      "nervuré"
    ];
    var idx = Math.floor(Math.random() * initChoices.length);
    $scope.perfumes = [];
    $scope.page = 0;
    $scope.allResults = false;
    $scope.searchTerm = $location.search().q || initChoices[idx];


    $scope.search = function(){
      console.log("Searching ...")
      $scope.page = 0;
      $scope.perfumes = [];
      $scope.allResults = false;
      $location.search({'q': $scope.searchTerm});
      $scope.loadMore();
    };
    $scope.loadMore = function(){
      perfumes.search($scope.searchTerm, $scope.page++).then(function(results){
        if(results.length !== 3){
          $scope.allResults = true;
        }

        var ii = 0;
        for(;ii < results.length; ii++){
          $scope.perfumes.push(results[ii]);
        }
      });
    };
    $scope.loadMore();

  }]);
