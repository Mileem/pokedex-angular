'use strict';

describe('Controller: PokemonsCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexAngularApp'));

  var PokemonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PokemonsCtrl = $controller('PokemonsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PokemonsCtrl.awesomeThings.length).toBe(3);
  });
});
