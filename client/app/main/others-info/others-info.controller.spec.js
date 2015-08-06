'use strict';

describe('Controller: OthersInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var OthersInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OthersInfoCtrl = $controller('OthersInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
