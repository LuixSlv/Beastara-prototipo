let db;

function openDatabase() {
    let request = indexedDB.open("pokemonGameDB", 1);

    request.onupgradeneeded = function(event) {
        let db = event.target.result;
        db.createObjectStore("saves", { keyPath: "id" });
    };

    request.onsuccess = function(event) {
        db = event.target.result;
    };
}

function saveGame(data) {
    let transaction = db.transaction(["saves"], "readwrite");
    let store = transaction.objectStore("saves");
    store.put(data);
}

function loadGame(callback) {
    let transaction = db.transaction(["saves"], "readonly");
    let store = transaction.objectStore("saves");
    let request = store.get(1);

    request.onsuccess = function() {
        callback(request.result);
    };
}

openDatabase();
