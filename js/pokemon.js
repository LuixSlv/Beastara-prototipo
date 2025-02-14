function generatePokemon(name, level) {
    let isShiny = Math.random() < 0.01; 
    let ivs = {
        hp: Math.floor(Math.random() * 31),
        attack: Math.floor(Math.random() * 31),
        defense: Math.floor(Math.random() * 31),
        speed: Math.floor(Math.random() * 31)
    };

    let evs = {
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0
    };

    let baseStats = {
        hp: 50,
        attack: 55,
        defense: 50,
        speed: 45
    };

    let pokemon = {
        name: name,
        level: level,
        isShiny: isShiny,
        ivs: ivs,
        evs: evs,
        hp: baseStats.hp + ivs.hp,
        maxHp: baseStats.hp + ivs.hp,
        moves: [
            { name: "Tackle", power: 40 },
            { name: "Quick Attack", power: 50 }
        ]
    };

    console.log(`Capturado: ${pokemon.name} ${isShiny ? "✨ Shiny!" : ""}`);
    return pokemon;
}
