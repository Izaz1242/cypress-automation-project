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
//Cypress.Commands.add('Get', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//let getbseUrl = Cypress.env("baseUrl");
Cypress.Commands.add("getRequest", (url) => {
  //let requesturl = getbseUrl + url;
  return cy
    .request({
      method: "GET",
      url: url,
      //failOnStatusCode: false,
    })
    .then((response) => {
      return response;
    });
});
