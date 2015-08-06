'use strict';

describe('Controller: ExperimentCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var ExperimentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperimentCtrl = $controller('ExperimentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
