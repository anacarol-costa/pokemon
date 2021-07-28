//import React from 'react';

function fetchKantoPokemon() {
  fetch('http://pokeapi.co/api/v2/pokemon/25')
    .then((response) => response.json())
    .then((pikachu) => console.log(pikachu));
}

//export default Pokemon;
