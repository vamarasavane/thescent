'use strict';

describe('Controller: SensitivityCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var SensitivityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SensitivityCtrl = $controller('SensitivityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
