'use strict';

angular.module('thescentApp')
  .controller('DensitivityCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'densitivity',
      'link': '/densitivity'
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




      //List densitivity


    $scope.clearDensitivity = function (){

      $scope.densitivity.name = '';
      $scope.densitivity.value = '';
    };



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
      exporterCsvFilename: 'densitivitys.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "densitivity list", style: 'headerStyle' },
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
      $http.get('/api/densitivitys')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    };







      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }



    var refreshDensitivity = function () {
      $http.get('/api/densitivitys').success(function (response) {
        $scope.listDensitivitys = response;
        $scope.densitivity = "";
        socket.syncUpdates('densitivitys', $scope.listDensitivitys = response);

        loadGridData();
      });

    }
    refreshDensitivity();
    $scope.addDensitivity = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }


      console.log($scope.texture_density);
      $http.post('/api/densitivitys', $scope.densitivity).success(function (response) {
        console.log(response);
        $scope.densitivity = "";
        refreshDensitivity();
      });
    }

    $scope.removeDensitivity =  function(id){
      console.log(id);
      $http.delete('/api/densitivitys/' + id).success(function  (response) {
        refreshDensitivity();
      });
    };



    $scope.updateDensitivity =  function(densitivity){

      var item = {
        _id : densitivity._id,
        name : densitivity.name,
        value : densitivity.value
      }

      console.log(item._id);


      $http.put('/api/densitivitys/' +  item._id,
        item).success(function (response){
        $scope.densitivity = "";
        refreshDensitivity();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('densitivitys');
    });
  });
