'use strict';

describe('Controller: LightCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var LightCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LightCtrl = $controller('LightCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
