function newGame() {
    localStorage.clear();
    clearIndexedDB(); // Apaga saves antigos
    window.location.href = "game.html";
}

function continueGame() {
    loadGame(function(saveData) {
        if (saveData) {
            window.location.href = "game.html";
        } else {
            alert("Nenhum jogo salvo encontrado!");
        }
    });
}

function openSettings() {
    alert("Configurações ainda não implementadas.");
}

function openBackpack() {
    document.getElementById("backpack-modal").style.display = "block";
    updateInventory();
}

function openPokemon() {
    document.getElementById("pokemon-modal").style.display = "block";
    updatePokemonList();
}

function openQuests() {
    document.getElementById("quests-modal").style.display = "block";
    updateQuests();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

