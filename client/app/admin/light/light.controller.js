'use strict';

angular.module('thescentApp')
  .controller('LightCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'light',
      'link': '/light'
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





    $scope.clearLight = function (){

      $scope.olfactory.name = '';
      $scope.olfactory.value = '';
    };


      //List light

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

      $http.get('/api/lights')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    };





      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }

    var refreshLight = function () {
      $http.get('/api/lights').success(function (response) {
        $scope.listLights = response;
        $scope.light = "";
        socket.syncUpdates('light', $scope.listLights = response);
        loadGridData();
      });

    }
    refreshLight();
    $scope.addLight = function (ngForm) {



      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }



      console.log($scope.light);
      $http.post('/api/lights', $scope.light).success(function (response) {
        console.log(response);
        $scope.light = "";
        refreshLight();
      });
    }

    $scope.removeLight =  function(id){
      console.log(id);
      $http.delete('/api/lights/' + id).success(function  (response) {
        refreshLight();
      });
    };




    $scope.updateLight =  function(light){

      var item = {
        _id : light._id,
        name : light.name,
        value : light.value
      }

      console.log(item._id);

      $http.put('/api/lights/' + item._id,
        item).success(function (response){
        $scope.light = "";
        refreshLight();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('light');
    });




  });
