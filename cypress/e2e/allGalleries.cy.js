///reference type="Cypress"//

import { should } from "chai";
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
})