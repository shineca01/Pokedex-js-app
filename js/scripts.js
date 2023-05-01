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

/* Above lists the pokemon inside an array titled "pokemonList". The array contains objects with
characteristics for each pokemon.*/

pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + ', ' + 'height: ' + pokemon.height + '<br>') ;
 });

/*this forEach loop replaces previous for loop which had an if...else statement that identified any pokemon greater than or equal to 1.7m.*/

