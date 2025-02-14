function showPokemonMenu() {
    let pokemonMenu = document.getElementById("pokemon-menu");
    pokemonMenu.innerHTML = "";

    player.pokemon.forEach((pokemon, index) => {
        let spriteURL = pokemon.isShiny 
            ? `https://play.pokemonshowdown.com/sprites/ani-shiny/${pokemon.name.toLowerCase()}.gif` 
            : `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name.toLowerCase()}.gif`;

        let pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");

        if (pokemon.isShiny) {
            pokemonCard.classList.add("shiny-glow");
        }

        pokemonCard.innerHTML = `
            <div class="pokemon-sprite-container">
                <img src="${spriteURL}" class="pokemon-sprite ${pokemon.isShiny ? "shiny-sprite" : ""}">
                ${pokemon.isShiny ? '<div class="shiny-text">✨ SHINY! ✨</div>' : ""}
            </div>
            <div class="pokemon-info">
                <h3>${pokemon.name} ${pokemon.isShiny ? "✨" : ""}</h3>
                <p><strong>Level:</strong> ${pokemon.level}</p>
                <p><strong>HP:</strong> ${pokemon.hp} / ${pokemon.maxHp}</p>
                <button onclick="showPokemonDetails(${index})">Ver Detalhes</button>
            </div>
        `;

        pokemonMenu.appendChild(pokemonCard);
    });

    document.getElementById("pokemon-container").style.display = "block";
}
