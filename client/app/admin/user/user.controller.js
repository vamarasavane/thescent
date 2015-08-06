'use strict';

angular.module('thescentApp')
  .controller('UserCtrl', function ($scope,$http,$location,Auth,socket,$window) {


    $scope.menu = [{
      'title': 'user',
      'link': '/user'
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



    //List users

    $scope.mySelections = [];

    $scope.gridOptions = {
      columnDefs: [
        { field: '_id',visible: false, enableCellEdit: false},
        { field: 'name', enableCellEdit: false},
        { field: 'email' , visible: false,enableCellEdit: false},
        { field: 'hashedPassword' , visible: false, enableCellEdit: false},
        { field: 'period_created' , visible: false, enableCellEdit: false}
      ],
      enableGridMenu: true,
      enableSelectAll: true,
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      fastWatch: true,
      exporterCsvFilename: 'lights.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "light list", style: 'headerStyle' },
      exporterPdfFooter: function ( currentPage, pageCount ) {
        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
      },
      exporterPdfCustomFormatter: function ( docDefinition ) {
        docDefinition.styles.headerStyle = { fontSize: 5, bold: true };
        docDefinition.styles.footerStyle = { fontSize: 5, bold: true };
        return docDefinition;
      },
      exporterPdfOrientation: 'landscape',
      exporterPdfPageSize: 'LETTER',
      exporterPdfMaxGridWidth: 500,
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(rows){
          $scope.mySelections = gridApi.selection.getSelectedRows();
        });
      }
    };



    //Load Data Grid Data
    loadGridData();

    function loadGridData(){
      $scope.mySelections = null;

      $http.get('/api/users')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });



    };


    $scope.clearUser = function (){

      $scope.user.name = '';
      $scope.user.email = '';
      $scope.user.password = '';
    };



    $scope.toggleFlat = function() {
      $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
    }




    var refreshUser = function () {
      $http.get('/api/users').success(function (response) {
        $scope.listUsers = response;
        $scope.user = "";
        socket.syncUpdates('user', $scope.listUsers = response);
        loadGridData();
      });

    }
    refreshUser();
    $scope.addUser = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }

      if(ngForm.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then(function () {
            // Account created, redirect to home
            $location.path('/user');
          })
          .catch(function (err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function (error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }

    }

    $scope.removeUser =  function(id){
      console.log(id);
      $http.delete('/api/users/' + id).success(function  (response) {
        refreshUser();
      });
    };



    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('user');
    });


    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };


  });
