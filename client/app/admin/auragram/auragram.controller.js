'use strict';

angular.module('thescentApp')
  .controller('AuragramCtrl', function ($scope,$http,$location,Auth,socket) {
    $scope.menu = [{
      'title': 'auragram',
      'link': '/auragram'
    }];

    $scope.isCollapsed = true;
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



    $scope.isCollapsed = false;



    //Load Drop down data
    loadDropDownData();

    function loadDropDownData(){
      //Get gender Data


      $http.get('/api/genders')
        .success(function(data) {
          $scope.genderDataSource = data;
        });



      //Get color Data

      $http.get('/api/colors')
        .success(function(data) {
          $scope.colorDataSource = data;
        });

      //Get place Data
      $http.get('/api/places')
        .success(function(data) {
          $scope.placeDataSource = data;
        });
      //Get light Data

      $http.get('/api/lights')
        .success(function(data) {
          $scope.lightDataSource = data;
        });

      //Get taste Data

      $http.get('/api/tastes')
        .success(function(data) {
          $scope.tasteDataSource = data;
        });
      //Get sound Data
      $http.get('/api/sounds')
        .success(function(data) {
          $scope.soundDataSource = data;
        });
      //Get level Data

      $http.get('/api/levels')
        .success(function(data) {
          $scope.levelDataSource = data;
        });
      //Get sensitivity Data

      $http.get('/api/sensitivitys')
        .success(function(data) {
          $scope.sensitivityDataSource = data;
        });

      //Get densitivity Data
      $http.get('/api/densitivitys')
        .success(function(data) {
          $scope.densityDataSource = data;
        });

      //Get olfactory Data
      $http.get('/api/olfactorys')
        .success(function(data) {
          $scope.olfactoryDataSource = data;
        });
      //Get wake Data
      $http.get('/api/wakes')
        .success(function(data) {
          $scope.wakeDataSource = data;
        });




      ///



    }





    $scope.clearAuragram = function (){

      $scope.auragram.name = '';
      $scope.auragram.brand = '';
      $scope.auragram.brand = '';
      $scope.auragram.description = '';
      $scope.auragram.gender = '';
      $scope.auragram.colors = '';
      $scope.auragram.places = '';
      $scope.auragram.lights = '';
      $scope.auragram.tastes = '';
      $scope.auragram.sounds = '';
      $scope.auragram.levels = '';
      $scope.auragram.sensitivitys = '';
      $scope.auragram.densitivitys = '';
      $scope.auragram.olfactorys = '';
      $scope.auragram.wakes = '';
    };


    ///////////////////////////////////////
    //////////////

    //Adding Color

    var itemsAddColor = {};
    itemsAddColor.data = [];
    $scope.itemsAddColor = itemsAddColor;

    $scope.deleteItemAddColor = function (index) {
      itemsAddColor.data.splice(index, 1);
    }
    $scope.addItemAddColor = function (index) {
      itemsAddColor.data.push({
        id: $scope.itemsAddColor.data.length + 1,
        title: $scope.color
      });
    }

    //Adding Place

    var itemsAddPlace = {};
    itemsAddPlace.data = [];
    $scope.itemsAddPlace = itemsAddPlace;

    $scope.deleteItemAddPlace = function (index) {
      itemsAddPlace.data.splice(index, 1);
    }
    $scope.addItemAddPlace = function (index) {
      itemsAddPlace.data.push({
        id: $scope.itemsAddPlace.data.length + 1,
        title: $scope.place
      });
    }

    //Adding Light

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

    //Adding Taste

    var itemsAddTaste = {};
    itemsAddTaste.data = [];
    $scope.itemsAddTaste = itemsAddTaste;

    $scope.deleteItemAddTaste = function (index) {
      itemsAddTaste.data.splice(index, 1);
    }
    $scope.addItemAddTaste = function (index) {
      itemsAddTaste.data.push({
        id: $scope.itemsAddTaste.data.length + 1,
        title: $scope.taste
      });
    }

    //Adding Sound

    var itemsAddSound = {};
    itemsAddSound.data = [];
    $scope.itemsAddSound = itemsAddSound;

    $scope.deleteItemAddSound = function (index) {
      itemsAddSound.data.splice(index, 1);
    }
    $scope.addItemAddSound = function (index) {
      itemsAddSound.data.push({
        id: $scope.itemsAddSound.data.length + 1,
        title: $scope.sound
      });
    }

    //Adding Level


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




    //Adding Texture

    var itemsAddTexture = {};
    itemsAddTexture.data = [];
    $scope.itemsAddTexture = itemsAddTexture;

    $scope.deleteItemAddTexture = function (index) {
      itemsAddTexture.data.splice(index, 1);
    }
    $scope.addItemAddTexture = function (index) {
      itemsAddTexture.data.push({
        id: $scope.itemsAddTexture.data.length + 1,
        title: $scope.texture
      });
    }




    //Adding Sensitivity

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


    //Adding Densitivity

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


    //Adding Olfactory

    var itemsAddOlfactory = {};
    itemsAddOlfactory.data = [];
    $scope.itemsAddOlfactory = itemsAddOlfactory;

    $scope.deleteItemAddOlfactory = function (index) {
      itemsAddOlfactory.data.splice(index, 1);
    }
    $scope.addItemAddOlfactory = function (index) {
      itemsAddOlfactory.data.push({
        id: $scope.itemsAddOlfactory.data.length + 1,
        title: $scope.olfactory
      });
    }

    //Adding Wake

    var itemsAddWake = {};
    itemsAddWake.data = [];
    $scope.itemsAddWake = itemsAddWake;

    $scope.deleteItemAddWake = function (index) {
      itemsAddWake.data.splice(index, 1);
    }
    $scope.addItemAddWake = function (index) {
      itemsAddWake.data.push({
        id: $scope.itemsAddWake.data.length + 1,
        title: $scope.wake
      });
    }


    /////////////////////////////
    ////////////////////////////
    ///////////////////////////
    //List perfume
    $scope.mySelections = [];

    $scope.gridOptions = {
      columnDefs: [
        { field: '_id',visible: false, enableCellEdit: false},
        { field: 'name', enableCellEdit: false},
        { field: 'brand' , visible: false,enableCellEdit: false},
        { field: 'gender' , visible: false, enableCellEdit: false},
        { field: 'description' , visible: false, enableCellEdit: false},
        { field: 'colors' , visible: false, enableCellEdit: false},
        { field: 'places' , visible: false, enableCellEdit: false},
        { field: 'lights' , visible: false, enableCellEdit: false},
        { field: 'tastes' , visible: false, enableCellEdit: false},
        { field: 'sounds' , visible: false, enableCellEdit: false},
        { field: 'levels' , visible: false, enableCellEdit: false},
        { field: 'sensitivitys' , visible: false, enableCellEdit: false},
        { field: 'densitivitys' , visible: false, enableCellEdit: false},
        { field: 'olfactorys' , visible: false, enableCellEdit: false},
        { field: 'wakes' , visible: false, enableCellEdit: false},
        { field: 'period_created' , visible: false, enableCellEdit: false}
      ],
      enableGridMenu: true,
      enableSelectAll: true,
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      fastWatch: true,
      exporterCsvFilename: 'auragrams.csv',
      exporterPdfDefaultStyle: {fontSize: 3},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 5, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "auragram list", style: 'headerStyle' },
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

      $http.get('/api/auragrams')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });

    };





    $scope.toggleFlat = function() {
      $scope.gridOptions.flatEntityAccess = !$scope.gridOptions.flatEntityAccess;
    }





    var refreshAuragram = function () {
      $http.get('/api/auragrams').success(function (response) {
        $scope.listAuragrams = response;
        $scope.auragram = "";
        socket.syncUpdates('auragrams', $scope.listAuragrams = response);
        loadGridData();
      });

    }
    refreshAuragram();
    $scope.addAuragram = function (ngForm) {


      if(ngForm.$invalid) {
        $scope.invalidSubmitAttempt = true;
        return;
      }

      var auragram = {
        name : $scope.auragram.name,
        brand : $scope.auragram.brand,
        description : $scope.auragram.description,
        gender : $scope.auragram.gender,
        colors : itemsAddColor.data,
        places : itemsAddPlace.data,
        lights : itemsAddLight.data,
        tastes : itemsAddTaste.data,
        sounds : itemsAddSound.data,
        levels : itemsAddLevel.data,
        textures : itemsAddTexture.data,
        sensitivitys : itemsAddSensitivity.data,
        densitivitys : itemsAddDensitivity.data,
        olfactorys : itemsAddOlfactory.data,
        wakes : itemsAddWake.data
      };



      console.log(auragram);
      $http.post('/api/auragrams', auragram).success(function (response) {
        console.log(response);
        auragram = "";
        $scope.color = "";
        $scope.place = "";
        $scope.light = "";
        $scope.taste = "";
        $scope.sound = "";
        $scope.level = "";
        $scope.texture = "";
        $scope.sensitivity = "";
        $scope.densitivity = "";
        $scope.olfactory = "";
        $scope.wake = "";
        itemsAddColor.data = [];
        itemsAddPlace.data = [];
        itemsAddLight.data = [];
        itemsAddTaste.data = [];
        itemsAddSound.data = [];
        itemsAddLevel.data = [];
        itemsAddTexture.data = [];
        itemsAddSensitivity.data = [];
        itemsAddDensitivity.data = [];
        itemsAddOlfactory.data = [];
        itemsAddWake.data = [];
        refreshAuragram();
      });
    }

    $scope.removeAuragram =  function(id){
      console.log(id);
      $http.delete('/api/auragrams/' + id).success(function  (response) {
        refreshAuragram();
      });
    };



    $scope.updateAuragram =  function(auragram){

      var item = {
        _id : auragram._id,
        name : auragram.name,

      }

      console.log(item._id);

      $http.put('/api/auragrams/' + item._id,
        item).success(function (response){
        $scope.auragram = "";
          refreshAuragram();
      });

    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('auragrams');
    });


  });
