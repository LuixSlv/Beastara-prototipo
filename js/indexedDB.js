const dbName = "PokemonGameDB";
const storeName = "saveData";

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = function (event) {
            let db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id" });
            }
        };

        request.onsuccess = function (event) {
            resolve(event.target.result);
        };

        request.onerror = function (event) {
            reject("Erro ao abrir IndexedDB: " + event.target.error);
        };
    });
}

function saveGame(data) {
    openDB().then(db => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        store.put({ id: "playerSave", ...data });
    });
}

function loadGame(callback) {
    openDB().then(db => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.get("playerSave");

        request.onsuccess = function () {
            callback(request.result);
        };

        request.onerror = function () {
            callback(null);
        };
    });
}
