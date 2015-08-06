'use strict';

describe('Controller: TasteCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var TasteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TasteCtrl = $controller('TasteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
