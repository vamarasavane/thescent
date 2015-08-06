'use strict';

describe('Controller: GenderCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var GenderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenderCtrl = $controller('GenderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
