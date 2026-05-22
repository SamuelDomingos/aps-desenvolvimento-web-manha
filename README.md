# APS - Desenvolvimento Web

## Integrantes

- Francisco Hilter Soares Ferreira
- Francisco Samuel Crispim Domingos

## Método JavaScript Escolhido

- `.splice()`

## Sobre o Projeto

Este projeto foi desenvolvido para a disciplina de Desenvolvimento Web com o objetivo de demonstrar a aplicação prática do método `.splice()` da linguagem JavaScript.

O sistema simula uma fila de atendimento de uma clínica, permitindo:

- remover pacientes cancelados;
- adicionar pacientes prioritários;
- substituir pacientes na fila.

O método `.splice()` foi utilizado para manipular diretamente os dados da fila de atendimento.

---

## O que o método `.splice()` faz?

O `.splice()` é um método do JavaScript utilizado para alterar arrays.

Com ele é possível:

- remover elementos;
- adicionar elementos;
- substituir elementos.

Diferente de métodos como `.slice()`, o `.splice()` altera o array original.

---

## Sintaxe

```js
array.splice(inicio, quantidade, elemento1, elemento2);
```

### Parâmetros

| Parâmetro  | Descrição                                |
| ---------- | ---------------------------------------- |
| inicio     | posição inicial da alteração             |
| quantidade | quantidade de elementos removidos        |
| elementos  | elementos opcionais adicionados ao array |

---

## Retorno

O método retorna um array contendo os elementos removidos.

---

## Como Executar

É necessário ter o Node.js instalado.

Execute o arquivo com o comando:

```bash
node splice_FranciscoHilter_Samuel.js
```

---

## Exemplo de Funcionamento

### Fila inicial

```js
["Marcos", "Fernanda", "Lucas", "Juliana", "Roberto"];
```

### Operações realizadas

- Remoção de paciente cancelado
- Inserção de paciente prioritário
- Substituição de paciente

---

## Objetivo da Aplicação

Demonstrar de forma prática e contextualizada o funcionamento do método `.splice()` em um cenário próximo de um sistema real.
