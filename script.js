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
        if (telaAtual && proximaTela) {
            telaAtual.classList.add("oculto");
            proximaTela.classList.remove("oculto");
        } else {
            console.error("Erro ao mudar de tela: uma das telas não foi encontrada.");
        }
    }

    document.getElementById("btn-iniciar").addEventListener("click", () => {
        console.log("Botão iniciar jogo clicado");
        mudarTela(telas.intro, telas.nome);
    });

    document.getElementById("confirmar-nome").addEventListener("click", () => {
        nomeJogador = document.getElementById("nome-jogador").value.trim();
        if (nomeJogador) {
            console.log(`Nome escolhido: ${nomeJogador}`);
            mudarTela(telas.nome, telas.pokemon);
        } else {
            alert("Digite um nome antes de continuar!");
        }
    });

    document.querySelectorAll(".pokemon-opcao").forEach(button => {
        button.addEventListener("click", () => {
            pokemonEscolhido = button.dataset.pokemon;
            console.log(`Pokémon escolhido: ${pokemonEscolhido}`);
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
            console.log(`Item encontrado: ${item}`);
            document.getElementById("status-rota1").textContent = "Você encontrou uma Pokébola!";
        } else {
            document.getElementById("status-rota1").textContent = "Você não encontrou nada...";
        }
    });

    document.getElementById("abrir-inventario").addEventListener("click", () => {
        document.getElementById("lista-itens").innerHTML = inventario.map(item => `<li>${item}</li>`).join("");
        mudarTela(telas.mapa, telas.inventario);
    });

    document.getElementById("fechar-inventario").addEventListener("click", () => {
    // Se quiser limpar ou esconder a lista de itens, pode fazer algo como:
        document.getElementById("lista-itens").innerHTML = "";

    // Muda a tela de volta para o mapa
        mudarTela(telas.inventario, telas.mapa);
    });

    document.getElementById("abrir-config").addEventListener("click", () => {
    // Muda para a tela de configurações
        mudarTela(telas.mapa, telas.configuracoes);
    });

    document.getElementById("salvar-jogo").addEventListener("click", () => {
        console.log("Salvando jogo...");
        salvarJogo(nomeJogador, pokemonEscolhido, inventario);
        alert("Jogo salvo!");
    });
});
