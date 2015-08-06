'use strict';

angular.module('thescentApp')
  .controller('PlaceCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'place',
      'link': '/place'
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

    $scope.gotolight = function(){

      $location.path('/light');
    };



    loadDropDown();

    function loadDropDown(){
      $http.get('/api/lights')
        .success(function(data) {
          $scope.lightDataSource = data;
        });
    }




    //Adding

    var itemsAddLight = {};
    itemsAddLight.data = [];
    $scope.itemsAddLight = itemsAddLight;

    $scope.deleteItemAddLight = function (index) {
      itemsAddLight.data.splice(index, 1);
    }
    $scope.addItemAddLight = function (index) {
      itemsAddLight.data.push({
        id: $scope.itemsAddLight.data.length + 1,
        title: $scope.light
      });
    }


    //Edit

    var itemsEditLight = {};
    itemsEditLight.data = [];
    $scope.itemsEditLight = itemsEditLight;

    $scope.deleteItemEditLight = function (index) {
      itemsEditLight.data.splice(index, 1);
    }
    $scope.addItemEditLight = function (index) {
      itemsEditLight.data.push({
        id: $scope.itemsEditLight.data.length + 1,
        title: $scope.light
      });
    }



      //List densitivity

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
      $http.get('/api/places')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    };






      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }




    $scope.clearPlace = function (){

      $scope.place.name = '';
      $scope.place.value = '';
    };

    var refreshPlace = function () {
      $http.get('/api/places').success(function (response) {
        $scope.listPlaces = response;
        $scope.place = "";
        socket.syncUpdates('place', $scope.listPlaces = response);
        loadGridData();
      });

    }
    refreshPlace();


    $scope.addPlace = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }

      var place = {
        name : $scope.place.name,
        value : $scope.place.value,
        lights : itemsAddLight.data
      };


      console.log(place);
      $http.post('/api/places', place).success(function (response) {
        console.log(response);
        place = "";
        $scope.light = "";
        itemsAddLight.data = [];
        refreshPlace();
      });
    }

    $scope.removePlace =  function(id){
      console.log(id);
      $http.delete('/api/places/' + id).success(function  (response) {
        refreshPlace();
      });
    };

    $scope.editPlace =  function(id) {
      console.log(id);
      $http.get('/api/places/' +  id).success(function (response) {
        $scope.place = response;

      });
    };


    $scope.updatePlace =  function(place){


      var item = {
        _id : place._id,
        name : place.name,
        value : place.value,


      }

      console.log(item._id);
      $http.put('/api/places/' + item._id,
        item).success(function (response){
        $scope.place = "";
        refreshPlace();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('place');
    });


  });
