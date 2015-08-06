'use strict';

describe('Controller: AuragramCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var AuragramCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuragramCtrl = $controller('AuragramCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
