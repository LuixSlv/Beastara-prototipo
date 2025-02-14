function startBattle(opponent) {
    let playerPokemon = player.pokemon[0]; 
    if (!playerPokemon) {
        alert("Você não tem um Pokémon para batalhar!");
        return;
    }

    let battleLog = `Iniciando batalha contra ${opponent.name}!`;
    console.log(battleLog);

    let playerTurn = true;
    while (playerPokemon.hp > 0 && opponent.hp > 0) {
        if (playerTurn) {
            let attack = playerPokemon.moves[Math.floor(Math.random() * playerPokemon.moves.length)];
            let damage = attack.power;
            opponent.hp -= damage;
            console.log(`${playerPokemon.name} usou ${attack.name}! Causou ${damage} de dano.`);
        } else {
            let attack = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
            let damage = attack.power;
            playerPokemon.hp -= damage;
            console.log(`${opponent.name} usou ${attack.name}! Causou ${damage} de dano.`);
        }
        playerTurn = !playerTurn;
    }

    if (playerPokemon.hp <= 0) {
        console.log("Seu Pokémon desmaiou!");
    } else {
        console.log(`Você venceu a batalha contra ${opponent.name}!`);
    }
}
