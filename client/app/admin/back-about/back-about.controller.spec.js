'use strict';

describe('Controller: BackAboutCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var BackAboutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackAboutCtrl = $controller('BackAboutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
