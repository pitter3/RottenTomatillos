it("should display a helpful message to the user when an error occurs", () => {
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 500,
  }).visit("http://localhost:3000");
  cy.get(".error-message").should(
    "contain",
    "This is a bad request,  please try again later."
  );
});

it("should display another helpful message to the user when an error occurs", () => {
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 400,
  }).visit("http://localhost:3000");
  cy.get(".error-message").should(
    "contain",
    "Sorry, the server is down, please try again later."
  );
});

it("should display yet another helpful message to the user when an error occurs", () => {
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 300,
  }).visit("http://localhost:3000");
  cy.get(".error-message").should(
    "contain",
    "Sorry, an error occured, please refresh page or try again later."
  );
});