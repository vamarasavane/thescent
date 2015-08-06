'use strict';

describe('Controller: BackPartnerCtrl', function () {

  // load the controller's module
  beforeEach(module('thescentApp'));

  var BackPartnerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BackPartnerCtrl = $controller('BackPartnerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
