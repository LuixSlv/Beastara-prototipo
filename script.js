document.addEventListener("DOMContentLoaded", () => {
    const telas = {
        intro: document.getElementById("intro"),
        nome: document.getElementById("tela-nome"),
        pokemon: document.getElementById("tela-inicial-pokemon"),
        mapa: document.getElementById("mapa"),
        rota1: document.getElementById("rota1"),
        inventario: document.getElementById("inventario"),
        configuracoes: document.getElementById("configuracoes")
    };

    let nomeJogador = "";
    let pokemonEscolhido = "";
    let inventario = [];

    function mudarTela(telaAtual, proximaTela) {
        telaAtual.classList.add("oculto");
        proximaTela.classList.remove("oculto");
    }

    document.getElementById("btn-iniciar").addEventListener("click", () => {
        mudarTela(telas.intro, telas.nome);
    });

    document.getElementById("confirmar-nome").addEventListener("click", () => {
        nomeJogador = document.getElementById("nome-jogador").value;
        mudarTela(telas.nome, telas.pokemon);
    });

    document.querySelectorAll(".pokemon-opcao").forEach(button => {
        button.addEventListener("click", () => {
            pokemonEscolhido = button.dataset.pokemon;
            mudarTela(telas.pokemon, telas.mapa);
        });
    });

    document.getElementById("ir-rota1").addEventListener("click", () => {
        mudarTela(telas.mapa, telas.rota1);
    });

    document.getElementById("acao-encontrar-pokemon").addEventListener("click", () => {
        let chanceShiny = Math.random() < 0.01;
        let mensagem = chanceShiny ? "Você encontrou um Pokémon Shiny!" : "Você encontrou um Pokémon selvagem!";
        document.getElementById("status-rota1").textContent = mensagem;
    });

    document.getElementById("acao-encontrar-item").addEventListener("click", () => {
        if (Math.random() < 0.1) {
            let item = "Pokébola";
            inventario.push(item);
            document.getElementById("status-rota1").textContent = "Você encontrou uma Pokébola!";
        } else {
            document.getElementById("status-rota1").textContent = "Você não encontrou nada...";
        }
    });

    document.getElementById("abrir-inventario").addEventListener("click", () => {
        document.getElementById("lista-itens").innerHTML = inventario.map(item => `<li>${item}</li>`).join("");
        mudarTela(telas.mapa, telas.inventario);
    });

    document.getElementById("salvar-jogo").addEventListener("click", () => {
        salvarJogo(nomeJogador, pokemonEscolhido, inventario);
        alert("Jogo salvo!");
    });
});


            document.getElementById("nome-exibido").textContent = `Treinador: ${nomeJogador}`;
            document.getElementById("pokemon-exibido").textContent = `Pokémon Inicial: ${pokemonEscolhido}`;
        });
    });
});
