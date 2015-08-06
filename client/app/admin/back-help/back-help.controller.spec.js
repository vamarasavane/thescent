'use strict';

describe('Controller: BackHelpCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var BackHelpCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackHelpCtrl = $controller('BackHelpCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
