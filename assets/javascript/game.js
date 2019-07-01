var computerPokemonName = ["PIKACHU", "SQUIRTLE", "BULBASAUR", "CHARMANDER", "MEOWTH"];

var computerPokemonNumber = Math.floor(Math.random() * computerPokemonName.length);
var PokemonChoice = computerPokemonName[computerPokemonNumber];
console.log(PokemonChoice);

var rightLetter = [];
var wrongLetter = [];
var Underscores = [];

var generateUnderscore = ( ) => {
    for (var i = 0; i < PokemonChoice.length; i++) {
        Underscores.push("_");
    }
    return Underscores;
}
console.log(generateUnderscore());

document.onkeyup = function(event) {

    var keyword = String.fromCharCode(event.keyCode);
    console.log(PokemonChoice.indexOf(keyword));

    if(keyword.indexOf(PokemonChoice) > -1) {

        rightLetter.push(keyword);
        console.log(rightLetter);
        console.log(true);

        Underscores[PokemonChoice.indexOf(keyword)] = keyword;
        console.log(Underscores);

        if(Underscores.join("") == PokemonChoice) {
            alert("You Win!");
        }

    } else {
        wrongLetter.push(keyword);
        console.log(wrongLetter);
    }
}