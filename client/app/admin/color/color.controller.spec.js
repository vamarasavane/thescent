'use strict';

describe('Controller: ColorCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var ColorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorCtrl = $controller('ColorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
