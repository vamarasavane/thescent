'use strict';

angular.module('thescentApp')
  .controller('SoundCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'sound',
      'link': '/sound'
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

    $scope.gotolevel = function(){

      $location.path('/level');
    };



    loadDropDown();

    function loadDropDown(){
      $http.get('/api/levels')
        .success(function(data) {
          $scope.levelDataSource = data;
        });
    }




    //Adding

    var itemsAddLevel = {};
    itemsAddLevel.data = [];
    $scope.itemsAddLevel = itemsAddLevel;

    $scope.deleteItemAddLevel = function (index) {
      itemsAddLevel.data.splice(index, 1);
    }
    $scope.addItemAddLevel = function (index) {
      itemsAddLevel.data.push({
        id: $scope.itemsAddLevel.data.length + 1,
        title: $scope.level
      });
    }


    //Edit

    var itemsEditLevel = {};
    itemsEditLevel.data = [];
    $scope.itemsEditLevel = itemsEditLevel;

    $scope.deleteItemEditLevel = function (index) {
      itemsEditLevel.data.splice(index, 1);
    }
    $scope.addItemEditLevel = function (index) {
      itemsEditLevel.data.push({
        id: $scope.itemsEditLevel.data.length + 1,
        title: $scope.level
      });
    }




      //List sound

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
      exporterCsvFilename: 'sounds.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "sound list", style: 'headerStyle' },
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




    $scope.clearSound = function (){

      $scope.sound.name = '';
      $scope.sound.value = '';
    };


    //Load Data Grid Data
    loadGridData();

    function loadGridData(){
      $scope.mySelections = null;

      $http.get('/api/sounds')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });

    };




      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }


      var refreshSound = function () {
      $http.get('/api/sounds').success(function (response) {
        $scope.listSounds = response;
        $scope.sound = "";
        socket.syncUpdates('sounds', $scope.listSounds = response);
        loadGridData();
      });

    }
    refreshSound();
    $scope.addSound = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }

      var sound = {
        name : $scope.sound.name,
        value : $scope.sound.value,
        levels : itemsAddLevel.data
      };



      console.log(sound);
      $http.post('/api/sounds', sound).success(function (response) {
        console.log(response);
        sound = "";
        itemsAddLevel.data = [];
        $scope.level = "";
        refreshSound();
      });
    }

    $scope.removeSound =  function(id){
      console.log(id);
      $http.delete('/api/sounds/' + id).success(function  (response) {
        refreshSound();
      });
    };



    $scope.updateSound =  function(sound){

      var item = {
        _id : sound._id,
        name : sound.name,
        value : sound.value,


      }

      console.log(item._id);

      $http.put('/api/sounds/' + item._id,
        item).success(function (response){
        $scope.sound = "";
        refreshSound();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('sounds');
    });

  });
