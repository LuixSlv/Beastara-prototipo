document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const historia = document.getElementById("historia");
    const telaNome = document.getElementById("tela-nome");
    const telaPokemon = document.getElementById("tela-inicial-pokemon");
    const mapa = document.getElementById("mapa");

    let nomeJogador = "";
    let pokemonEscolhido = "";

    // Início do jogo
    document.getElementById("btn-iniciar").addEventListener("click", () => {
        intro.classList.add("oculto");
        historia.classList.remove("oculto");
    });

    // Sequência de história
    const dialogos = [
        "Olá, jovem treinador! Bem-vindo ao mundo dos Pokémon.",
        "Meu nome é Professor Oak, e eu estudo essas incríveis criaturas!",
        "Os Pokémon vivem em harmonia com os humanos e podem ser treinados para batalhas.",
        "Mas antes de tudo... qual é o seu nome?"
    ];
    let indiceDialogo = 0;

    document.getElementById("proximo-texto").addEventListener("click", () => {
        if (indiceDialogo < dialogos.length - 1) {
            indiceDialogo++;
            document.getElementById("dialogo").textContent = dialogos[indiceDialogo];
        } else {
            historia.classList.add("oculto");
            telaNome.classList.remove("oculto");
        }
    });

    // Confirmar nome e ir para escolha de Pokémon
    document.getElementById("confirmar-nome").addEventListener("click", () => {
        nomeJogador = document.getElementById("nome-jogador").value;
        if (nomeJogador.trim() !== "") {
            telaNome.classList.add("oculto");
            telaPokemon.classList.remove("oculto");
        }
    });

    // Escolher Pokémon inicial e iniciar o jogo
    document.querySelectorAll(".pokemon-opcao").forEach(button => {
        button.addEventListener("click", () => {
            pokemonEscolhido = button.dataset.pokemon;
            telaPokemon.classList.add("oculto");
            mapa.classList.remove("oculto");

            document.getElementById("nome-exibido").textContent = `Treinador: ${nomeJogador}`;
            document.getElementById("pokemon-exibido").textContent = `Pokémon Inicial: ${pokemonEscolhido}`;
        });
    });
});
