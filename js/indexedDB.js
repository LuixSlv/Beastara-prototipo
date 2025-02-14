const dbName = "PokemonGameDB";
let db;

function openDB() {
    let request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains("saves")) {
            db.createObjectStore("saves", { keyPath: "id" });
        }
    };

    request.onsuccess = function(event) {
        db = event.target.result;
    };

    request.onerror = function(event) {
        console.log("Erro ao abrir IndexedDB:", event.target.errorCode);
    };
}

function saveGame(data) {
    let transaction = db.transaction(["saves"], "readwrite");
    let store = transaction.objectStore("saves");
    store.put({ id: "player", ...data });
}

function loadGame(callback) {
    let transaction = db.transaction(["saves"], "readonly");
    let store = transaction.objectStore("saves");
    let request = store.get("player");

    request.onsuccess = function() {
        callback(request.result || null);
    };

    request.onerror = function() {
        callback(null);
    };
}

function clearIndexedDB() {
    let transaction = db.transaction(["saves"], "readwrite");
    let store = transaction.objectStore("saves");
    store.clear();
}

openDB();
