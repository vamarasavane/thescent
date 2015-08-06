'use strict';

angular.module('thescentApp')
  .controller('SensitivityCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'sensitivity',
      'link': '/sensitivity'
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

    $scope.gototexture = function(){

      $location.path('/texture');
    };





      //List sensitivity

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
      exporterCsvFilename: 'sensitivitys.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "sensitivity list", style: 'headerStyle' },
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





    $scope.clearSensitivity = function (){

      $scope.sensitivity.name = '';
      $scope.sensitivity.value = '';
    };





    //Load Data Grid Data
    loadGridData();

    function loadGridData(){
      $scope.mySelections = null;

      $http.get('/api/sensitivitys')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    };







      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }



      var refreshSensitivity = function () {
      $http.get('/api/sensitivitys').success(function (response) {
        $scope.listSensitivitys = response;
        $scope.sensitivity = "";
        socket.syncUpdates('sensitivitys', $scope.listSensitivitys = response);
        loadGridData();
      });

    }
    refreshSensitivity();
    $scope.addSensitivity = function (ngForm) {


      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }



      console.log($scope.sensitivity);
      $http.post('/api/sensitivitys', $scope.sensitivity).success(function (response) {
        console.log(response);
        $scope.sensitivity = "";
        refreshSensitivity();
      });
    }

    $scope.removeSensitivity =  function(id){
      console.log(id);
      $http.delete('/api/sensitivitys/' + id).success(function  (response) {
        refreshSensitivity();
      });
    };





    $scope.updateSensitivity =  function(sensitivity){



      var item = {
        _id : sensitivity._id,
        name : sensitivity.name,
        value : sensitivity.value,


      }

      console.log(item._id);

      $http.put('/api/sensitivitys/' + item._id,
        item).success(function (response){
        $scope.sensitivity = "";
        refreshSensitivity();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('sensitivitys');
    });


  });
