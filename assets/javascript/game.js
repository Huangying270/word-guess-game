<script type="text/javascript">
    
        var computerPokemonChoices = ["pikachu", "squirtle", "bulbasaur", "charmander", "meowth"];
        for (i = 0, i < computerPokemonChoices, i++);

        var win = 0;
        var losses = 0;

        document.onkeyup = function(event) {

            var userGuess = event.key;

            var computerPokemonGuess = computerPokemonChoices[Math.floor(Math.random() * computerPokemonChoices.length)];
        
            if (( userGuess == "a") || ( userGuess == "b") || ( userGuess == "c") || ( userGuess == "d") || ( userGuess == "e") || ( userGuess == "f") || ( userGuess == "g") || 
            ( userGuess == "z") || ( userGuess == "u") || ( userGuess == "t") || ( userGuess == "o") || ( userGuess == "j") || ( userGuess == "i") || ( userGuess == "h") || 
            ( userGuess == "y") || ( userGuess == "v") || ( userGuess == "s") || ( userGuess == "p") || ( userGuess == "m") || ( userGuess == "k") || 
            ( userGuess == "x") || ( userGuess == "w") || ( userGuess == "r") || ( userGuess == "q") || ( userGuess == "n") || ( userGuess == "l")) {
                if ((userGuess == computerPokemonGuess[i])) {

                }
            }
        }

    </script>