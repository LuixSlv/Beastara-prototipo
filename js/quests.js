let quests = [
    {
        id: 1,
        description: "Capture 3 Pokémon selvagens.",
        reward: { pokeballs: 2 },
        completed: false
    },
    {
        id: 2,
        description: "Derrote 5 treinadores.",
        reward: { money: 500 },
        completed: false
    }
];

function completeQuest(id) {
    let quest = quests.find(q => q.id === id);
    if (quest && !quest.completed) {
        quest.completed = true;
        for (let reward in quest.reward) {
            if (reward in player) {
                player[reward] += quest.reward[reward];
            } else {
                inventory[reward] += quest.reward[reward];
            }
        }
        console.log(`Missão concluída: ${quest.description}`);
    } else {
        console.log("Missão já foi concluída ou não existe.");
    }
}

function showQuests() {
    console.log("Missões:");
    quests.forEach(q => {
        console.log(`${q.id}: ${q.description} - ${q.completed ? "✔ Concluída" : "❌ Em progresso"}`);
    });
}
