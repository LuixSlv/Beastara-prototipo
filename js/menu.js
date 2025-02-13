document.addEventListener("DOMContentLoaded", function () {
    loadGame((data) => {
        const menu = document.getElementById("menu");
        menu.innerHTML = `
            <h1>Pokémon</h1>
            <button onclick="startNewGame()">Novo Jogo</button>
            ${data ? '<button onclick="continueGame()">Continuar</button>' : ""}
        `;
    });
});

function startNewGame() {
    saveGame({ progress: "inicial" });
    window.location.href = "game.html";
}

function continueGame() {
    window.location.href = "game.html";
}
