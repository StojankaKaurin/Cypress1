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


describe("login test", ()=> {
    beforeEach('visit app and click the login link',()=>{
        cy.visit("/");
        authLogin.loginLink.click();
        cy.url().should("include","/login");
        authLogin.loginPageHeading
        .should("be.visible")
        .and("have.text","Please login");
    });
    it("login with invalid email address", () => {
        authLogin.login(credentials.invalidEmail, credentials.validPassword);
        cy.url().should("include", "/login");
        authLogin.errorMessage
          .should("be.visible")
          .and("have.text", "Bad Credentials")
          .and("have.css","background-color", "rgb(248, 215,218");
      });
    
      it("login with valid credentials", () => {
        authLogin.login(credentials.validEmail, credentials.validPassword);
        cy.url().should("not.include", "/login");
       
        
      });
     
    });



