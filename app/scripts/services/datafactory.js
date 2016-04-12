'use strict';

/**
 * @ngdoc service
 * @name pokedexAngularApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the pokedexAngularApp.
 */
angular.module('pokedexAngularApp')
  .factory('dataFactory', function ($http) {
    // Service logic
    // ...

    var urlBase = 'http://pokeapi.co/api/v2';
    var dataFactory = {};

    dataFactory.getPokemons = function () {
      return $http.get(urlBase + '/pokemon/?limit=811&offset=0');
    };

    dataFactory.getPokemon = function (namePokemon) {
      return $http.get(urlBase + '/pokemon/' + namePokemon);
    };

    return dataFactory;
  });
