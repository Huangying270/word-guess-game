var computerPokemonName = ["pikachu", "squirtle", "bulbasaur", "charmander", "meowth"];

var computerPokemonNumber = Math.floor(Math.random() * computerPokemonName.length);
var PokemonChoice = computerPokemonName[computerPokemonNumber];
console.log(PokemonChoice);

var Underscores = [];
var generateUnderscore = ( ) => {
    for (var i = 0; i < PokemonChoice.length; i++) {
        Underscores.push("_");
    }
    return Underscores;
}
console.log(generateUnderscore());

document.onkeyup = function(event) {
    console.log(event);
    
    var keycode = event.keyCode;
    console.log(keycode);
}