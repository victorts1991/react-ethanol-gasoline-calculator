# Calculadora de Combustível (Álcool ou Gasolina)

![Logo da Calculadora de Gasolina ou Álcool](./src/assets/logo.png)

Uma aplicação simples e intuitiva para ajudar motoristas a decidir qual combustível é mais vantajoso (álcool ou gasolina) com base nos preços por litro.

## ✨ Funcionalidades

* **Cálculo Inteligente:** Determina qual combustível (álcool ou gasolina) compensa mais usar, aplicando a regra de que o álcool é vantajoso se seu preço for até 70% do preço da gasolina.
* **Interface Amigável:** Design limpo e fácil de usar para inserção dos preços.
* **Exibição Clara do Resultado:** Mostra de forma destacada qual é a melhor opção e seu respectivo preço.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **CSS:** Para estilização da aplicação.

### 🧪 Testes

* **Jest:** Framework de testes JavaScript para testes unitários.
* **React Testing Library:** Ferramenta para testar componentes React da forma que o usuário os usa.

### ⚙️ Integração Contínua (CI)

* **GitHub Actions:** Workflow automatizado para rodar os testes da aplicação a cada push para a branch `main`, garantindo a qualidade do código.

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada) e o [Yarn](https://yarnpkg.com/) instalados em sua máquina.

### Instalação

1.  Clone este repositório:
2.  Navegue até o diretório do projeto:
    ```bash
    cd react-ethanol-gasoline-calculator
    ```

3.  Instale as dependências:
    ```bash
    yarn install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

  ```bash
  yarn dev
  ```

### Como Rodar os Testes

Para executar a suíte de testes unitários e de componentes:

  ```bash
  yarn test
  ```

Para rodar os testes em modo "watch" (que reexecuta os testes automaticamente ao salvar arquivos):

  ```bash
  yarn test --watch
  ```