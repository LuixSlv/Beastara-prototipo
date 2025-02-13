document.addEventListener("DOMContentLoaded", function () {
    loadGame((data) => {
        if (!data) {
            window.location.href = "index.html"; // Se não houver save, volta para o menu
        } else {
            showStory(data.progress);
        }
    });
});

function showStory(progress) {
    const gameContainer = document.getElementById("game");

    if (progress === "inicial") {
        gameContainer.innerHTML = `
            <p>Bem-vindo ao mundo dos Pokémon!</p>
            <p>Meu nome é Carvalho, mas todos me chamam de Professor Pokémon.</p>
            <button onclick="showCharacterCreation()">Continuar</button>
        `;
    } else if (progress === "escolha_pokemon") {
        showPokemonSelection();
    }
}

function showCharacterCreation() {
    const gameContainer = document.getElementById("game");
    gameContainer.innerHTML = `
        <p>Antes de começarmos, me diga: Qual é o seu nome?</p>
        <input type="text" id="playerName" placeholder="Seu nome">
        <button onclick="confirmCharacter()">Confirmar</button>
    `;
}

function confirmCharacter() {
    const playerName = document.getElementById("playerName").value;
    if (playerName.trim() !== "") {
        saveGame({ progress: "escolha_pokemon", playerName });
        window.location.href = "game.html";
    }
}

function showPokemonSelection() {
    const gameContainer = document.getElementById("game");
    gameContainer.innerHTML = `
        <p>Escolha seu Pokémon inicial!</p>
        <button onclick="choosePokemon('Bulbasaur')">Bulbasaur</button>
        <button onclick="choosePokemon('Charmander')">Charmander</button>
        <button onclick="choosePokemon('Squirtle')">Squirtle</button>
    `;
}

function choosePokemon(pokemon) {
    loadGame((data) => {
        data.pokemon = pokemon;
        data.progress = "inicio_aventura";
        saveGame(data);
        window.location.href = "game.html";
    });
}
