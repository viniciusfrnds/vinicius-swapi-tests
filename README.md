# vinicius-swapi-tests

Este projeto consiste em uma série de testes automatizados para a API pública SWAPI (Star Wars API), que fornece dados do universo de Star Wars. Utilizando Node.js e Jest, cada teste realiza uma requisição para um endpoint específico da API, validando o funcionamento e a resposta dos recursos fornecidos. O projeto explora dados de planetas, naves, filmes, personagens, e também realiza verificações para rotas inexistentes.

## Estrutura do Projeto

O projeto contém 10 testes automatizados, cada um focado em um endpoint ou caso específico da API SWAPI. Todos os testes são executados de forma independente e automatizada no GitHub Actions, com cada teste sendo executado em seu próprio workflow para garantir modularidade e isolamento nos resultados.

## Executando os Testes

Para rodar os testes localmente, siga os passos abaixo:

1. Instale as dependências:
   ```bash
   npm install
