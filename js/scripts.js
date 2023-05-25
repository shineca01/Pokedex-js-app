let pokemonRepository = (function () {
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
  if (
    typeof pokemon === 'object' &&
    'name'in pokemon &&
    'height' in pokemon &&
    'types' in pokemon 
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log('pokemon is not correct');
  }
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem= document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-name');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);

function showDetails(pokemon) {
    console.log(pokemon.name)
}

button.addEventListener ('click', function (event) {
  showDetails(pokemon);
  console.log(event);
 });
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
};

})();

pokemonRepository.add({name: 'Charmander', height: 0.6, types: ['fire']});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
})
