let pokemonRepository = (function () {

    /* Below lists the pokemon inside an array titled "pokemonList". The array contains objects with
characteristics for each pokemon.*/

    let pokemonList = [
        {
            name: 'Charmander',
            height: 0.6,
            types: ['fire']
        },
        { 
            name: 'Venusaur',
            height: 2,
            types: ['grass', 'poison']
        },
        {
            name: 'Raichu',
            height: 0.8,
            types: ['electric']
        },
    ];

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(pokemon.name + ', ' + 'height: ' + pokemon.height + ', ' + 'types: ' + pokemon.types + '<br>') ;
});



