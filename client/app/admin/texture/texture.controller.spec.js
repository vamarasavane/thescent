'use strict';

describe('Controller: TextureCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var TextureCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TextureCtrl = $controller('TextureCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
