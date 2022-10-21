# Story: Seu primeiro time pokemon

A idéia é testar os fundamentos de `testing`, aplicando o que foi visto no 
`JS Expert - Módulo 02` num projeto simples e divertido.

Consumindo a [PokeAPI](https://pokeapi.co/), faça uma API que retorne 3 pokemóns aleatórios para formar seu time inicial numa jornada pokemon.

## Requisitos

### Funcionalidades
1. `GET /` 

Deve ser a rota padrão da aplicação ao tentar acessar qualquer rota inexistente. (ex.: `/hi`, `/hello`)

2. `GET /team`

Deve retornar um array com 3 pokemóns aleatórios, contendo seus respectivos `name` e `moves`, (mostrando apenas um array de strings com os 3 primeiros `moves` presentes na API. ex.: `["mega-punch","fire-punch","thunder-punch"]`).

### Testes

* [x] mocks
* [x] stubs
* [x] spies
* [x] testes end-2-end
* [x] testes unitários
* [x] 100% de code coverage

### Extras

* [x] TDD e BDD, será que rola? Acho que vale a tentativa!
* [x] Que tal consumir a API sem usar libs externas? o módulo `https` do node pode ser bem interessante!


### Checklist features

- Web API
  * [x] Deve ter uma rota raiz usada como _fallback_.
  * [x] Deve ter uma rota de `/team`, onde: 
    * [x] Deve consumir a PokeAPI e selecionar 3 pokemóns aleatórios
    * [x] Deve consumir a PokeAPI para obter mais informações sobre os pokemóns escolhidos
    * [x] Deve retornar um objeto JSON conetendo um array com 3 pokemóns, cada um com seus respectivos `name (String)` e `moves (String[])`

- Testes
  * [x] Deve ter cobertura de testes end-2-end e unitários
  * [x] 100% de code coverage

## Submissão

1. Inicialize um repósitório git com um arquivo README.md contendo seu nome, quais tópicos do checklist foram implementados e, caso queira, um breve resumo de cada tópico.

2. Crie o projeto e os testes.

3. Coloque as instruções de como configurar e executar seu projeto e os testes no README.md (não se esqueça do coverage com o `nyc`).

4. Envie o link no canal `#desafios-jsexpert` da nossa comunidade no discord.

## Até quando?

Se você está pegando esse desafio na estréia, corre lá e envia pra gente até *Quarta-feira, 10 de novembro de 2021 (10/11/2021)*!


![image](https://user-images.githubusercontent.com/80557451/197297560-a1c48390-3573-41d0-8bfe-7f98240d8a33.png)
