'use strict';

angular.module('thescentApp')
  .controller('ColorCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'color',
      'link': '/color'
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



      //List color

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
      exporterCsvFilename: 'colors.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "color list", style: 'headerStyle' },
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
      $http.get('/api/colors')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    };

      $scope.toggleFlat = function() {
        $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
      }


      var refreshColor = function () {
      $http.get('/api/colors').success(function (response) {
        $scope.listColors = response;
        $scope.color = "";
        socket.syncUpdates('color', $scope.listColors = response);
        loadGridData();
      });

    }


    $scope.clearColor = function (){

      $scope.color.name = '';
      $scope.color.value = '';
    };


    refreshColor();
    $scope.addColor = function (ngForm) {

      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }


      console.log($scope.color);
      $http.post('/api/colors', $scope.color).success(function (response) {
        console.log(response);
        $scope.color = "";
        refreshColor();
      });
    }

    $scope.removeColor =  function(id){
      console.log(id);
      $http.delete('/api/colors/' + id).success(function  (response) {
        refreshColor();
      });
    };



    $scope.updateColor =  function(color){

      var item = {
        _id : color._id,
        name : color.name,
        value : color.value
      }

      console.log(item._id);
      $http.put('/api/colors/' + item._id,
        item
      ).success(function (response){
        $scope.color = "";
        refreshColor();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('color');
    });


  });
