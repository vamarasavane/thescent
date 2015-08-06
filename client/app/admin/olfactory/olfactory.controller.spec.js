'use strict';

describe('Controller: OlfactoryCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var OlfactoryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OlfactoryCtrl = $controller('OlfactoryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
