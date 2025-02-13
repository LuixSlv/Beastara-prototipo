function newGame() {
    localStorage.clear();
    window.location.href = "game.html";
}

function continueGame() {
    loadGame(function(saveData) {
        if (saveData) {
            localStorage.setItem("gameData", JSON.stringify(saveData));
            window.location.href = "game.html";
        } else {
            alert("Nenhum jogo salvo encontrado!");
        }
    });
}

function openSettings() {
    alert("Configurações ainda não implementadas.");
}
