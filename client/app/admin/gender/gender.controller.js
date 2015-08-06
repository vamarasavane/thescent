'use strict';

angular.module('thescentApp')
  .controller('GenderCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'gender',
      'link': '/gender'
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



      //List gender

    $scope.mySelections = [];

    $scope.gridOptions = {
      columnDefs: [
        { field: '_id',visible: false, enableCellEdit: false},
        { field: 'name', enableCellEdit: false},
        { field: 'value' , visible: false,enableCellEdit: false},
        { field: 'period_created' , visible: false, enableCellEdit: false}
      ],
      enableGridMenu: true,
      enableSelectAll: true,
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      fastWatch: true,
      exporterCsvFilename: 'genders.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "gender list", style: 'headerStyle' },
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


    $scope.clearGender = function (){

      $scope.gender.name = '';
      $scope.gender.value = '';
    };


    //Load Data Grid Data
    loadGridData();

    function loadGridData(){
      $scope.mySelections = null;

      $http.get('/api/genders')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });


    };




      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }



    var refreshGender = function () {
      $http.get('/api/genders').success(function (response) {
        $scope.listGenders = response;
        $scope.gender = "";
        socket.syncUpdates('gender', $scope.listGenders = response);
        loadGridData();
      });

    }
    refreshGender();
    $scope.addGender = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }



      console.log($scope.gender);
      $http.post('/api/genders', $scope.gender).success(function (response) {
        console.log(response);
        $scope.gender = "";
        refreshGender();
      });
    }

    $scope.removeGender =  function(id){
      console.log(id);
      $http.delete('/api/genders/' + id).success(function  (response) {
        refreshGender();
      });
    };




    $scope.updateGender =  function(gender){

      var item = {
        _id : gender._id,
        name : gender.name,
        value : gender.value
      }

      console.log(item._id);

      $http.put('/api/genders/' + item._id,
        item).success(function (response){
        $scope.gender = "";
        refreshGender();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('gender');
    });


  });
