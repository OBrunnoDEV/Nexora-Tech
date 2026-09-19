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

        botao.textContent = "Adicionado ✓";

        setTimeout(function() {
            botao.textContent = "Adicionar ao Carrinho";
        }, 500);

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

        console.log(produtoExistente);

        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            carrinho.push({
                nome: nomeProduto,
                preco: precoNumerico,
                quantidade: 1
            });
        }

        totalCarrinho += precoNumerico;

        atualizarCarrinho();

        const totalFormatado = totalCarrinho.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        

        console.log(totalCarrinho);

        console.log(carrinho);

        console.log(nomeProduto);
        console.log(precoNumerico);

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

        botaoAdicionar.addEventListener("click", function() {
            produto.quantidade++;

            totalCarrinho += produto.preco;

            atualizarCarrinho();
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
        carrinho.length = 0;
        totalCarrinho = 0;

        atualizarCarrinho();
        
    });

        botaoFinalizarCompra.addEventListener("click", function() {
            if (carrinho.length === 0) {
                alert("Seu carrinho está vazio.");
            } else {
                alert("Compra finalizada com sucesso!");

                carrinho.length = 0;
                totalCarrinho = 0;

                atualizarCarrinho();
            }
        });
    
        atualizarCarrinho();