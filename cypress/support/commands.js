// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { method } = require("cypress/types/bluebird");
const { first } = require("cypress/types/lodash");

Cypress.Commands.add("loginViaBackend",(emailParam, passwordParam));{
    cy.request({
        method:"POST"
        url:"https://gallery-api.vivifyideas.com/api/auth/login",
        body:{
            email:emailParam
            password:passwordParam,
        },
    })
    .its("body")
    .then(response) ; {
        window.localStorage.setItem("token",response.access_token);
    });
});
Cypress.Commands.add(
   "registerViaBackend" ,
   (email, firstname, lastname, password) => {
    cy.request{
        method:"POST",
        url:"",
        body;{
            email:email,
            first_name: firstname,
            last_name: lastaname,

        }
    }
   }
)