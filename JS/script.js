const botoesCarrinho = document.querySelectorAll(".produto-botao");

const carrinhoContador = document.getElementById("carrinho-contador");

const listaCarrinho = document.getElementById("lista-carrinho");

const totalCarrinhoElemento = document.getElementById("total-carrinho");

const botaoLimparCarrinho = document.getElementById("limpar-carrinho");

const botaoFinalizarCompra = document.getElementById("finalizar-compra");

const carrinhoSalvo = localStorage.getItem("carrinho");

const carrinho = carrinhoSalvo
    ? JSON.parse(carrinhoSalvo)
    : [];

let totalCarrinho = 0;

carrinho.forEach(function(produto) {
    totalCarrinho += produto.preco * produto.quantidade;
});

botoesCarrinho.forEach(function(botao) {
    botao.addEventListener("click", function() {

        const cardProduto = botao.closest(".produto-card");

        const nomeProduto = cardProduto.querySelector("h3").textContent;

        const precoProduto = cardProduto.querySelector(".produto-preco").textContent;

        const precoNumerico = Number(
            precoProduto
                .replace("R$ ", "")
                .replace(",", ".")
        );

        const produtoExistente = carrinho.find(function(produto) {
        return produto.nome === nomeProduto;
});

        if (produtoExistente) {

            if (produtoExistente.quantidade < 10) {
                produtoExistente.quantidade++;
                totalCarrinho += precoNumerico;

                botao.textContent = "Adicionado ✓";
            } else {
                botao.textContent = "Limite atingido";
            }

        } else {

            carrinho.push({
                nome: nomeProduto,
                preco: precoNumerico,
                quantidade: 1
            });

            totalCarrinho += precoNumerico;

            botao.textContent = "Adicionado ✓";
        }

        setTimeout(function() {
            botao.textContent = "Adicionar ao Carrinho";
        }, 800);

        atualizarCarrinho();


        });

});

function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    if (carrinho.length === 0) {
        botaoLimparCarrinho.style.display = "none";
        botaoFinalizarCompra.style.display = "none";
    } else {
        botaoLimparCarrinho.style.display = "block";
        botaoFinalizarCompra.style.display = "inline-block";
    }

    const totalFormatado = totalCarrinho.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    let quantidadeTotal = 0;

    carrinho.forEach(function(produto) {
        quantidadeTotal += produto.quantidade;
    });

    carrinhoContador.textContent =
        `Carrinho (${quantidadeTotal}) - ${totalFormatado}`;

    totalCarrinhoElemento.textContent =
        `Total: ${totalFormatado}`;

    if (carrinho.length === 0) {
        listaCarrinho.textContent = "Seu carrinho está vazio.";
    }

    carrinho.forEach(function(produto, indice) {
        const item = document.createElement("div");

        item.classList.add("item-carrinho");

        const infoProduto = document.createElement("span");

        infoProduto.classList.add("info-produto");

        const nomeItem = document.createElement("strong");

        nomeItem.textContent = produto.nome;

        infoProduto.appendChild(nomeItem);

        const precoItem = document.createElement("span");

        precoItem.classList.add("preco-item");

        precoItem.textContent =
            `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

        infoProduto.appendChild(precoItem);

        const quantidadeItem = document.createElement("span");

        quantidadeItem.classList.add("quantidade-item");

        quantidadeItem.textContent =
            `Quantidade: ${produto.quantidade}`;

        infoProduto.appendChild(quantidadeItem);

        const subtotalItem = document.createElement("span");

        const subtotal = produto.preco * produto.quantidade;

        subtotalItem.textContent =
            `Subtotal: ${subtotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}`;

        subtotalItem.classList.add("subtotal-item");

        infoProduto.appendChild(subtotalItem);
        
        item.appendChild(infoProduto);
        
        const controles = document.createElement("div");

        controles.classList.add("controles-carrinho");

        const botaoDiminuir = document.createElement("button");

        botaoDiminuir.textContent = "-";

        botaoDiminuir.classList.add("botao-quantidade");

        botaoDiminuir.addEventListener("click", function() {
            produto.quantidade--;

            totalCarrinho -= produto.preco;

            if (produto.quantidade === 0) {
                carrinho.splice(indice, 1);
            }

            if (Math.abs(totalCarrinho) < 0.01) {
                totalCarrinho = 0; 
            }

            atualizarCarrinho();

            
        });


        const botaoAdicionar = document.createElement("button");

        botaoAdicionar.textContent = "+";

        botaoAdicionar.classList.add("botao-quantidade");

        if (produto.quantidade >= 10) {
        botaoAdicionar.disabled = true;
    }

        botaoAdicionar.addEventListener("click", function() {
            if (produto.quantidade < 10) {
                produto.quantidade++;

                totalCarrinho += produto.preco;

                atualizarCarrinho();
            }
        });


        const botaoRemover = document.createElement("button");

        botaoRemover.textContent = "Remover";

        botaoRemover.classList.add("botao-remover");

        botaoRemover.addEventListener("click", function() {
            totalCarrinho -= produto.preco * produto.quantidade;

            carrinho.splice(indice, 1);

            if (Math.abs(totalCarrinho) < 0.01) {
                totalCarrinho = 0;
            }

            atualizarCarrinho();

        });

            controles.appendChild(botaoDiminuir);
            controles.appendChild(botaoAdicionar);
            controles.appendChild(botaoRemover);

            item.appendChild(controles);

            listaCarrinho.appendChild(item);
    });

}
        
        botaoLimparCarrinho.addEventListener("click", function() {
            const confirmarLimpeza = confirm(
                "Deseja realmente limpar todo o carrinho?"
            );

            if (confirmarLimpeza) {
                carrinho.length = 0;
                totalCarrinho = 0;

                atualizarCarrinho();
            }
        });

        botaoFinalizarCompra.addEventListener("click", function() {
            if (carrinho.length === 0) {
                alert("Seu carrinho está vazio.");
            } else {
                const confirmarCompra = confirm(
                    "Deseja realmente finalizar a compra?"
                );

                if (confirmarCompra) {
                    alert("Compra finalizada com sucesso!");

                    carrinho.length = 0;
                    totalCarrinho = 0;

                    atualizarCarrinho();
                }
            }
        });
    
        atualizarCarrinho();

        const formulario = document.getElementById("form-newsletter");
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem-formulario");
        console.log(formulario);

        formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valorNome === "") {
    mensagem.textContent = "Por favor, preencha seu nome.";
    return;
}
    if (valorEmail === "") {
    mensagem.textContent = "Por favor, preencha seu e-mail.";
    return;
}
    if (!emailValido.test(valorEmail)) {
    mensagem.textContent = "Por favor, digite um e-mail válido.";
    return;
}
    mensagem.textContent = "Cadastro realizado com sucesso!";
    nome.value = "";
    email.value = "";

});