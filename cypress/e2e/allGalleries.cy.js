///reference type="Cypress"//

import { should } from "chai";
import { all } from "cypress/types/bluebird";
import{authLogin}from "../page_objects/loginPage";
const credentials={
    email:"kaurinstojanka@gmail.com",
    password: 'GALERIJA123'
};
describe("all galleries page test",()=>{
    beforeEach("visit app and login",()=>{
        cy.visit("/");
        authLogin.login(credentials.email, credentials.password);
    });
    it("loads page successfully",()=>{
        allGalleries.allGalleriesHeading
        .should("be.visible")
        .and("exitst")
        .and("have.test","All Galleries");

    allGalleries.allGalleries
        .should("be.visible")
        .and("have.length",10);
    allGalleries.singleGallery
    .find("ing")
    .should("be.visible");

    });
    it("test pagination", ()=>{
        allGalleries.allGalleries.should("be visible").and("have.length",10);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be visible").and("have.length",20);
        allGalleries.loadMoreBtn.click();

    });
    it.only("test search",()=>{
        let searchTerm="Gallery with 2 images";
        allGalleries.search(searchTerm);
        allGalleries.allGalleries.should("be visible").and("have.length",6);
        allGalleries.singleGallery.find("a").first().click();
        cy.get("h1").should("be.visible").and("have.text"),searchTerm;
    });
})