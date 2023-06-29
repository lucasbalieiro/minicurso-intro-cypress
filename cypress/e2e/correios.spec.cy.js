describe("consulta CEP no site dos Correios", () => {
    it("deve pesquisar um CEP", () => {
      cy.visit("https://buscacepinter.correios.com.br/app/endereco/index.php")
      cy.get('#endereco')
      .click()
      .type("69074580")

      cy.get('#tipoCEP')
      .select("Localidade/Logradouro")

      cy.get('#btn_pesquisar').click()

      cy.get('tbody > tr > [data-th="Logradouro/Nome"]')
      .contains("Rua Cretenses")

      cy.get('tbody > tr > [data-th="Bairro/Distrito"]')
      .contains("Morro da Liberdade")

      cy.get('tbody > tr > [data-th="Localidade/UF"]')
      .contains("Manaus/AM")

      cy.get('tbody > tr > [data-th="CEP"]')
      .contains("69074-580")
    })
  })