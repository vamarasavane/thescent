'use strict';

angular.module('thescentApp')
  .controller('TextureCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'texture',
      'link': '/texture'
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

    $scope.gotodensitivity = function(){

      $location.path('/densitivity');
    };

    $scope.gotosensitivity = function(){

      $location.path('/sensitivity');
    };




    //Adding Drop down Label

    var itemsAddSensitivity = {};
    itemsAddSensitivity.data = [];
    $scope.itemsAddSensitivity = itemsAddSensitivity;

    $scope.deleteItemAddSensitivity = function (index) {
      itemsAddSensitivity.data.splice(index, 1);
    }
    $scope.addItemAddSensitivity = function (index) {
      itemsAddSensitivity.data.push({
        id: $scope.itemsAddSensitivity.data.length + 1,
        title: $scope.sensitivity
      });
    }


    var itemsAddDensitivity = {};
    itemsAddDensitivity.data = [];
    $scope.itemsAddDensitivity = itemsAddDensitivity;

    $scope.deleteItemAddDensitivity = function (index) {
      itemsAddDensitivity.data.splice(index, 1);
    }
    $scope.addItemAddDensitivity = function (index) {
      itemsAddDensitivity.data.push({
        id: $scope.itemsAddDensitivity.data.length + 1,
        title: $scope.densitivity
      });
    }
   //Adding Drop down Label





    loadDropDown();

   function loadDropDown(){
     $http.get('/api/densitivitys')
       .success(function(data) {
         $scope.densitivityDataSource = data;
       });

     $http.get('/api/sensitivitys')
       .success(function(data) {
         $scope.sensitivityDataSource = data;
       });
   }




    $scope.clearTexture = function (){

      $scope.texture.name = '';
      $scope.texture.value = '';
    };


    //List texture

    //List perfume
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
      exporterCsvFilename: 'textures.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "texture list", style: 'headerStyle' },
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
      $http.get('/api/textures')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    };


    $scope.toggleFlat = function() {
      $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
    }






    var refreshTexture = function () {
      $http.get('/api/textures').success(function (response) {
        $scope.listTexutures = response;
        $scope.texture = "";
        socket.syncUpdates('textures', $scope.listTexutures = response);
        loadGridData();
      });

    }
    refreshTexture();
    $scope.addTexture = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }

      var texture = {
        name : $scope.texture.name,
        value : $scope.texture.value,
        sensitivitys : itemsAddSensitivity.data,
        densitivitys : itemsAddDensitivity.data
      };

      console.log(texture);
      $http.post('/api/textures', texture).success(function (response) {
        console.log(response);
        texture = "";
        $scope.sensitivity = "";
        $scope.densitivity = "";
        itemsAddSensitivity.data = [];
        itemsAddDensitivity.data = [];
        refreshTexture();
      });
    }

    $scope.removeTexture =  function(id){
      console.log(id);
      $http.delete('/api/textures/' + id).success(function  (response) {
        refreshTexture();
      });
    };



    $scope.updateTexture =  function(texture){

      var item = {
        _id : texture._id,
        name : texture.name,
        value : texture.value
      }

      console.log(item._id);

      $http.put('/api/textures/' + item._id,
        item).success(function (response){
        $scope.texture = "";
        refreshTexture();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('textures');
    });

  });
