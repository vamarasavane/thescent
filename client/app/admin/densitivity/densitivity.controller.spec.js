'use strict';

describe('Controller: DensitivityCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var DensitivityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DensitivityCtrl = $controller('DensitivityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
