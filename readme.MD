
# Cypress - Instalação e Execução

Este documento fornece instruções para instalar e executar o Cypress em um projeto já existente.

## Pré-requisitos

Antes de começar, verifique se o seguinte software está instalado em sua máquina:

- Node.js: https://nodejs.org (versão 10 ou superior)
- npm: normalmente vem com o Node.js

## Instalação

Siga as etapas abaixo para instalar o Cypress:

1. Clone este repositório para o seu ambiente local.
2. Abra o terminal e navegue até o diretório do projeto.

3. Execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

## Execução dos testes

Agora você está pronto para executar os testes com o Cypress. Siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório do projeto.

2. Execute o seguinte comando para abrir a interface do Cypress:

   ```bash
   npx cypress open
   ```

   Isso abrirá a interface do Cypress, permitindo que você selecione e execute seus testes.

3. Se você preferir executar os testes em segundo plano sem a interface gráfica, execute o seguinte comando:

   ```bash
   npx cypress run
   ```

   Os resultados dos testes serão exibidos no terminal.


## Comandos básicos do Cypress

Aqui estão alguns comandos básicos do Cypress que você pode usar para interagir com elementos da página e fazer asserções:

- `cy.visit(url)`: Visita uma determinada URL.
- `cy.get(selector)`: Seleciona um elemento DOM com base em um seletor CSS.
- `cy.contains(text)`: Seleciona o primeiro elemento que contém o texto especificado.
- `cy.click()`: Clica em um elemento.
- `cy.type(text)`: Insere texto em um campo de entrada.
- `cy.should('be.visible')`: Verifica se um elemento é visível na página.
- `cy.should('have.text', expectedText)`: Verifica se um elemento contém o texto esperado.

## Estrutura de um teste

Aqui está um exemplo básico da estrutura de um teste usando o Cypress:

```javascript
describe('Nome do teste', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Substitua pela URL desejada
  });

  it('Descrição do teste', () => {
    cy.get('#elementId').click();
    cy.contains('Texto esperado').should('be.visible');
  });
});
