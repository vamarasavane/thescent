'use strict';

describe('Controller: PerfumeCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var PerfumeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfumeCtrl = $controller('PerfumeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
