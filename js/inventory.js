let inventory = {
    pokeballs: 5,
    potions: 3,
    rareCandies: 1
};

function useItem(item) {
    if (inventory[item] > 0) {
        inventory[item]--;
        console.log(`Você usou um(a) ${item}. Restam ${inventory[item]}.`);
    } else {
        console.log(`Você não tem mais ${item}.`);
    }
}

function showInventory() {
    console.log("Inventário:");
    for (let item in inventory) {
        console.log(`${item}: ${inventory[item]}`);
    }
}
