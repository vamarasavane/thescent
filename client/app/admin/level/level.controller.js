'use strict';

angular.module('thescentApp')
  .controller('LevelCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'level',
      'link': '/level'
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



    $scope.clearLevel = function (){

      $scope.level.name = '';
      $scope.level.value = '';
    };


      //List level

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
      exporterCsvFilename: 'levels.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "level list", style: 'headerStyle' },
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

      $http.get('/api/levels')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });

    };





      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }




      var refreshLevel = function () {
      $http.get('/api/levels').success(function (response) {
        $scope.listLevels = response;
        $scope.level = "";
        socket.syncUpdates('levels', $scope.listLevels = response);
        loadGridData();
      });

    }
    refreshLevel();
    $scope.addLevel = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }

      console.log($scope.level);
      $http.post('/api/levels', $scope.level).success(function (response) {
        console.log(response);
        $scope.level = "";
        refreshLevel();
      });
    }

    $scope.removeLevel =  function(id){
      console.log(id);
      $http.delete('/api/levels/' + id).success(function  (response) {
        refreshLevel();
      });
    };




    $scope.updateLevel =  function(level){

      var item = {
        _id : level._id,
        name : level.name,
        value : level.value
      }

      console.log(item._id)

      $http.put('/api/levels/' + item._id,
        item).success(function (response){
        $scope.level = "";
        refreshLevel();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('levels');
    });

  });
