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

let pokemonLarge = ' - Wow that\'s big!';

for (let i=0; i < pokemonList.length; i++) {
   if (pokemonList[i].height >= 1.7) {
      document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')' + (pokemonLarge) + ' <br>');}
   else {
      document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')<br>');
   }
}

/*this for loop has an if...else statement that identifies any pokemon greater than or equal to 1.7m.*/