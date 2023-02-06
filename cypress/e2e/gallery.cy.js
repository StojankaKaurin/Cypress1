///<reference types="Cypress"/>
describe("gallery test", () =>{
    it("login test", () =>{

       cy.visit("https://gallery-app.vivifyideas.com/");
        //tacka za klase
       cy.get(".nav-link").eq(1).click();

       cy.get("#email").type("kaurinstojanka@gmail.com");
       //taraba je za id

       cy.get("#password").type("GALERIJA123");
       cy.get(".btn").click();
       cy.get(".nav-link").should("have.length",4);
       cy.url().should("not.contain","/login");

       cy.get(".nav-link").eq(3).click();
    });
    it.only("register test", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain","/register");
    cy.get("#first-name").type("Test");
    cy.get("#last-name").type("Test");
    cy.get("#email").type("test123@MediaList.com");
    cy.get("#password").type("Test12345");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    cy.get("button").click();
    
});
});
