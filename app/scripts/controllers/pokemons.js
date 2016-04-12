'use strict';

/**
 * @ngdoc function
 * @name pokedexAngularApp.controller:PokemonsCtrl
 * @description
 * # PokemonsCtrl
 * Controller of the pokedexAngularApp
 */
angular.module('pokedexAngularApp')
  .controller('PokemonsCtrl', function ($scope, dataFactory) {
    //$scope.status;
    //$scope.pokemons;

    function getPokemons() {
      dataFactory.getPokemons()
      .then(function (response) {
        $scope.pokemons = response.data;
      }, function (error) {
        $scope.status = 'Unable to load pokemons data ' + error.message;
      });
    }


    getPokemons();
  });
