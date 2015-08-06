'use strict';

angular.module('thescentApp')
  .controller('OlfactoryCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'olfactory',
      'link': '/olfactory'
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





      //List olfactory

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
      exporterCsvFilename: 'olfactorys.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "olfactory list", style: 'headerStyle' },
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


    $scope.clearOlfactory = function (){

      $scope.olfactory.name = '';
      $scope.olfactory.value = '';
    };



    //Load Data Grid Data
    loadGridData();

    function loadGridData(){
      $scope.mySelections = null;

      $http.get('/api/olfactorys')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });

    };







      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }



    var refreshOlfactory = function () {
      $http.get('/api/olfactorys').success(function (response) {
        $scope.listOlfactorys = response;
        $scope.olfactory = "";
        socket.syncUpdates('olfactory', $scope.listOlfactorys = response);

        loadGridData();
      });

    };



    refreshOlfactory();
    $scope.addOlfactory = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }


      console.log($scope.olfactory);
      $http.post('/api/olfactorys', $scope.olfactory).success(function (response) {
        console.log(response);
        $scope.olfactory = "";
        refreshOlfactory();
      });
    }

    $scope.removeOlfactory =  function(id){
      console.log(id);
      $http.delete('/api/olfactorys/' + id).success(function  (response) {
        refreshOlfactory();
      });
    };




    $scope.updateOlfactory =  function(olfactory){

      var item = {
        _id : olfactory._id,
        name : olfactory.name,
        value : olfactory.value
      }

      console.log(item._id);

      $http.put('/api/olfactorys/' + item._id,
        item).success(function (response){
        $scope.olfactory = "";
        refreshOlfactory();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('olfactory');
    });

  });
