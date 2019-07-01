var computerPokemonName = ["PIKACHU", "SQUIRTLE", "BULBASAUR", "CHARMANDER", "MEOWTH"];

var computerPokemonNumber = Math.floor(Math.random() * computerPokemonName.length);
var PokemonChoice = computerPokemonName[computerPokemonNumber];
console.log(PokemonChoice);

var rightLetter = [];
var wrongLetter = [];
var Underscores = [];

var pokeUnderScores = document.getElementsByClassName("underscore");



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

    if(PokemonChoice.indexOf(keyword) > -1) {

        rightLetter.push(keyword);
        console.log(rightLetter);
        console.log(true);

        Underscores[PokemonChoice.indexOf(keyword)] = keyword;
        console.log(Underscores);

        pokeUnderScores.innerHTML = Underscores.join("_");

        if(Underscores.join("") == PokemonChoice) {
            alert("You Win!");
        }

    } else {
        console.log("wrong guess");
        wrongLetter.push(keyword);
        console.log(wrongLetter);
    }
}

Underscores[0].innerHTML = generateUnderscore().join(" ");