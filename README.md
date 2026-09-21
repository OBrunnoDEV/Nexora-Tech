# Nexora Tech

Loja virtual front-end desenvolvida como projeto acadêmico da disciplina de Desenvolvimento Web.

A **Nexora Tech** é uma loja fictícia de tecnologia, periféricos e acessórios para setup, criada com foco em uma interface moderna, responsiva, organizada e interativa.

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript, aplicando conceitos de estrutura semântica, responsividade, manipulação do DOM, eventos, validação de formulários e armazenamento local.

---

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- LocalStorage

---

## Objetivo

Desenvolver uma loja virtual front-end responsiva para uma atividade acadêmica, apresentando produtos de tecnologia em uma interface moderna e adaptável para computadores, tablets e dispositivos móveis.

O projeto também teve como objetivo colocar em prática conceitos estudados durante a disciplina, como:

- HTML semântico
- Estilização com CSS
- Design responsivo
- Manipulação do DOM
- Eventos em JavaScript
- Validação de formulário
- Armazenamento de dados no navegador
- Controle de versão com Git e GitHub

---

## Produtos

A loja apresenta atualmente oito produtos:

- Mouse gamer
- Teclado mecânico
- Headset
- Mousepad
- Webcam
- SSD
- Memória RAM
- Suporte para notebook

---

## Funcionalidades

### Catálogo de produtos

- Exibição dos produtos em cards
- Imagem, nome, descrição e preço
- Layout responsivo
- Botão para adicionar produtos ao carrinho
- Feedback visual ao adicionar um produto

### Carrinho de compras

- Adicionar produtos ao carrinho
- Controle de quantidade com botões `+` e `-`
- Limite máximo de 10 unidades por produto
- Remoção completa de produtos
- Limpeza de todo o carrinho
- Contador total de itens
- Cálculo automático do valor total
- Cálculo do subtotal de cada produto
- Confirmação antes de limpar o carrinho
- Confirmação antes de finalizar a compra
- Mensagem quando o carrinho está vazio
- Atualização automática dos valores e quantidades

### Persistência de dados

O carrinho utiliza `localStorage`, permitindo que produtos e quantidades permaneçam armazenados mesmo após a página ser atualizada.

### Formulário / Newsletter

- Campo para nome
- Campo para e-mail
- Validação com JavaScript
- Verificação de campos obrigatórios
- Validação do formato do e-mail
- Mensagens de erro e sucesso
- Limpeza dos campos após um cadastro válido

### Navegação e interface

- Menu de navegação
- Rolagem suave entre seções
- Hero/banner principal
- Imagem de destaque no banner
- Layout adaptável para diferentes tamanhos de tela
- Interface em tema escuro
- Identidade visual da Nexora Tech
- Efeitos de hover em botões, links e cards
- Navegação direta para produtos, contato e carrinho

---

## Responsividade

O projeto foi desenvolvido para funcionar em:

- Computadores
- Tablets
- Smartphones

O layout dos produtos se adapta conforme o tamanho da tela:

- Desktop: até 4 produtos por linha
- Tablet: 2 produtos por linha
- Mobile: 1 produto por linha

O carrinho, formulário, menu e demais elementos também possuem ajustes específicos para dispositivos móveis.

---

## Estrutura do projeto

```text
Nexora-Tech/
│
├── index.html
│
├── CSS/
│   └── style.css
│
├── JS/
│   └── script.js
│
├── img/
│
├── README.md
└── PROJECT.md
```

---

## Equipe

- Bruno Rafael da Silva
- Juan Pablo Clemente da Silva

---

## Organização do desenvolvimento

O projeto foi desenvolvido de forma colaborativa utilizando Git e GitHub.

Durante o desenvolvimento foram utilizadas branches separadas para diferentes funcionalidades, permitindo que cada integrante trabalhasse em partes específicas do projeto antes da integração com a branch principal.

Entre as áreas desenvolvidas estão:

- Estrutura HTML
- Catálogo de produtos
- Estilização com CSS
- Responsividade
- Carrinho de compras
- Manipulação do DOM
- LocalStorage
- Formulário
- Validação com JavaScript
- Polimento visual
- Integração das funcionalidades

---

## Status do projeto

### Concluído

- Estrutura HTML semântica
- Cabeçalho e menu de navegação
- Hero principal
- Catálogo com 8 produtos
- Cards de produtos
- Estilização completa com CSS
- Layout responsivo
- Carrinho de compras interativo
- Controle de quantidade
- Limite de quantidade por produto
- Cálculo de subtotal
- Cálculo do valor total
- Persistência com LocalStorage
- Remoção de produtos
- Limpeza do carrinho
- Simulação de finalização de compra
- Formulário / newsletter
- Validação com JavaScript
- Feedback de ações para o usuário
- Navegação com rolagem suave
- Rodapé
- Git e GitHub
- Desenvolvimento colaborativo com branches
- Polimento visual da interface

---

## Possíveis melhorias futuras

Apesar de o projeto acadêmico estar concluído, algumas funcionalidades poderiam ser adicionadas futuramente:

- Pesquisa de produtos
- Filtro por categoria
- Ordenação por preço
- Página individual para cada produto
- Sistema de login
- Cadastro de usuários
- Lista de favoritos
- Checkout completo
- Integração com uma API
- Backend
- Banco de dados
- Sistema real de pagamentos
- Controle de estoque
- Histórico de pedidos

---

## Aprendizados

Durante o desenvolvimento da Nexora Tech foram praticados conceitos importantes de desenvolvimento front-end, como:

- Estruturação de páginas com HTML
- Estilização e responsividade com CSS
- Manipulação do DOM com JavaScript
- Eventos de clique e envio de formulário
- Criação e manipulação de arrays
- Atualização dinâmica de elementos da página
- Uso de LocalStorage
- Validação de formulários
- Organização de código
- Versionamento com Git
- Trabalho colaborativo utilizando GitHub
- Uso de branches e Pull Requests
- Resolução de conflitos durante a integração do projeto

---

## Observação

Este projeto possui finalidade acadêmica.

Os produtos, carrinho e processo de finalização de compra são apenas uma simulação front-end.

Nenhum pagamento, pedido ou transação real é realizado pela aplicação.