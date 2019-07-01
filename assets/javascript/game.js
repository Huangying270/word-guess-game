var computerPokemonName = ["pikachu", "squirtle", "bulbasaur", "charmander", "meowth"];

var computerPokemonNumber = Math.floor(Math.random() * computerPokemonName.length);
var PokemonChoice = computerPokemonName[computerPokemonNumber];
console.log(PokemonChoice);