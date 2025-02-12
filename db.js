function salvarJogo(nome, pokemon, inventario) {
    let request = indexedDB.open("PokemonRPG", 1);

    request.onupgradeneeded = function(event) {
        let db = event.target.result;
        if (!db.objectStoreNames.contains("saves")) {
            db.createObjectStore("saves", { keyPath: "id" });
        }
    };

    request.onsuccess = function(event) {
        let db = event.target.result;
        let transaction = db.transaction("saves", "readwrite");
        let store = transaction.objectStore("saves");

        let saveData = { id: "save1", nome: nome, pokemon: pokemon, inventario: inventario };
        let putRequest = store.put(saveData);

        putRequest.onsuccess = function() {
            console.log("Jogo salvo com sucesso!");
        };

        putRequest.onerror = function() {
            console.error("Erro ao salvar o jogo.");
        };
    };

    request.onerror = function() {
        console.error("Erro ao abrir o banco de dados.");
    };
}
