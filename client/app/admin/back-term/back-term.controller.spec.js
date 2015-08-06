'use strict';

describe('Controller: BackTermCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var BackTermCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackTermCtrl = $controller('BackTermCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
