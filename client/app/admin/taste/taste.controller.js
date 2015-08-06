'use strict';

angular.module('thescentApp')
  .controller('TasteCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'taste',
      'link': '/taste'
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






      //List taste

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
      exporterCsvFilename: 'tastes.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "taste list", style: 'headerStyle' },
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

      $http.get('/api/tastes')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });

    };



    $scope.clearTaste = function (){

      $scope.taste.name = '';
      $scope.taste.value = '';
    };



    var refreshTaste = function () {
      $http.get('/api/tastes').success(function (response) {
        $scope.listTastes = response;
        $scope.taste = "";
        socket.syncUpdates('taste', $scope.listTastes = response);
        loadGridData();
      });

    }
    refreshTaste();
    $scope.addTaste = function (ngForm) {


      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }


      console.log($scope.taste);
      $http.post('/api/tastes', $scope.taste).success(function (response) {
        console.log(response);
        $scope.taste = "";
        refreshTaste();
      });
    }

    $scope.removeTaste =  function(id){
      console.log(id);
      $http.delete('/api/tastes/' + id).success(function  (response) {
        refreshTaste();
      });
    };

    $scope.editTaste =  function(id) {
      console.log(id);
      $http.get('/api/tastes/' +  id).success(function (response) {
        $scope.taste = response;

      });
    };


    $scope.updateTaste =  function(taste){

      var item = {
        _id : taste._id,
        name : taste.name,
        value : taste.value
      }

      console.log(item._id);
      $http.put('/api/tastes/' + item._id,
        item).success(function (response){
        $scope.taste = "";
        refreshTaste();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('taste');
    });

  });
