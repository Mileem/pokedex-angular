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

    $scope.getPokemon = function (pokemon) {
      console.log(pokemon);
      dataFactory.getPokemon(pokemon)
      .then(function (response) {
        $scope.pokemon = response.data;
        $scope.pokemon.picture = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ getNumberOfPokemon($scope.pokemon.id) + '.png';
      }, function (error) {
        $scope.status = 'Unable to load '+ pokemon +' pokemon data ' + error.message;
      });
    };

    function getNumberOfPokemon(id) {
      var numberPokemon = id;
      if(numberPokemon < 10) {
        numberPokemon = '00' + numberPokemon;
      } else if (numberPokemon < 100) {
        numberPokemon = '0' + numberPokemon;
      }
      return numberPokemon;
    }


    getPokemons();
  });
