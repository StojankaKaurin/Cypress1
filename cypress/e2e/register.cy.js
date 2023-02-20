// <reference types="Cypress" />
const locators = require("../fixtures/locators.json");
describe("Register test", () => {
  let userData = {
    firstName: "Stojanka",
    lastName: "Kaurin",
    email: "kaurinstojanka@gmail.com",
    password: "GALERIJA123",
    shortPassword: "pass",
    invalidEmail: "testmail.com",
  };
  beforeEach("visit app and click on register link", () => {
    cy.visit("/");
    cy.get(locators.navbar.registerButton).eq(2).click();
    cy.url().should("contain", "/register");
  });
  it("register without first name", () => {
    cy.get(locators.register.lastNameInput).type("userData.lastName");
    cy.get(locators.commonFormElements.emailInput).type("userData.email");
    cy.get(locators.commonFormElements.passwordInput).type("userData.password");
    cy.get(locators.register.passwordConfirmationInput).type(
      "userData.password"
    );
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });
  it("register without email address", () => {
    cy.get(locators.register.firstNameInput).type("Test");
    cy.get(locators.register.lastNameInput).type("Test");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.register.passwordConfirmationInput).type("Test12345");
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });
  it("register with valid data", () => {
    cy.get(locators.register.firstNameInput).type("Test");
    cy.get(locators.register.lastNameInput).type("Test");
    cy.get(locators.commonFormElements.emailInput).type("test@mail.com");
    cy.get(locators.commonFormElements.passwordInput).type("Test12345");
    cy.get(locators.register.passwordConfirmationInput).type("Test12345");
    cy.get(locators.register.tosCheckbox).check();
    cy.get(locators.commonFormElements.submitButton).click();
    cy.url().should("contain", "/register");
  });
});


/// <reference types="Cypress" />
import { registerPage } from "./registerPage";
import { faker } from "@faker-js/faker";
import { authLogin } from "../page_objects/loginPage";
describe("Register test", () => {
  let userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email,
    password: "${faker.lorem.word(8)}1",
    shortPassword: "${faker.lorem.word(3)}1",
    invalidEmail: "testrina.ns@hotmail.com",
  };
  before("visit app and click on register link", () => {
    cy.visit("/");
    registerPage.registerLink.click();
    cy.url().should("contain", "/register");
  });
  it("register with valid data", () => {
    const randomName = faker.name.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    registerPage.registerWithValidData(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    cy.url().should("contain", "/register");
  });
  cy.loginViaBackend();
  cy.visit("/login");
  authLogin.login("kaurinstojanka@gmail.com", "ovde upisi svoju sifru");
});