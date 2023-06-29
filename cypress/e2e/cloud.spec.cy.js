describe("access CloudBot Map", () => {
    it("should access map", () => {
        cy.visit("http://10.60.101.100:4200/map")
        cy.wait(100)

        cy.get(':nth-child(3) > tr > #Left > app-checkbox > #checkbox > .checkmark')
        .click()

        cy.wait(300)

        cy.get('#botao').click()

        cy.wait(300)

        cy.get("#mat-input-0").click()
        .type("batata")

        
    })


})