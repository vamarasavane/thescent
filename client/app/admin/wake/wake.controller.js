'use strict';

angular.module('thescentApp')
  .controller('WakeCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'wake',
      'link': '/wake'
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



    $scope.clearWake = function (){

      $scope.wake.name = '';
      $scope.wake.value = '';
    };



    //List wake

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
      exporterCsvFilename: 'wakes.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "wake list", style: 'headerStyle' },
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

      $http.get('/api/wakes')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });

    };

      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }


    var refreshWake = function () {
      $http.get('/api/wakes').success(function (response) {
        $scope.listWakes = response;
        $scope.wake = "";
        socket.syncUpdates('wakes', $scope.listWakes = response);
        loadGridData();
      });

    }
    refreshWake();
    $scope.addWake = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }


      console.log($scope.wake);
      $http.post('/api/wakes', $scope.wake).success(function (response) {
        console.log(response);
        $scope.wake = "";
        refreshWake();
      });
    }

    $scope.removeWake =  function(id){
      console.log(id);
      $http.delete('/api/wakes/' + id).success(function  (response) {
        refreshWake();
      });
    };



    $scope.updateWake =  function(wake){


      var item = {
        _id : wake._id,
        name : wake.name,
        value : wake.value
      }

      console.log(item._id);

      $http.put('/api/wakes/' + item._id,
        item).success(function (response){
        $scope.wake = "";
        refreshWake();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('wakes');
    });


  });
