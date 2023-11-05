// import { Schema } from "./schemas/test.schema";
// const envName = Cypress.env("name");
// const base_url = Cypress.env("base_url").;
// const chai = require("chai");
// chai.use(require("chai-json-schema-ajv"));
// const expect = chai.expect;

describe("Content MicroService-" + envName, () => {

  it("Content Service: Ping Test", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/1"
    })
      .then((response) => {
        expect(response).to.have.property("status", 200);
      //  expect(response.body).to.have.property("name", "");
      //  expect(response.body).to.be.jsonSchema();
      });
  });
});