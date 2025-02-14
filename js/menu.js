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
