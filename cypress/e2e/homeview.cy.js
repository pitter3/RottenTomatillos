describe("Home page user flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "example",
      }
    ).as('HomePage')
    cy.visit("http://localhost:3000/");

  }); // do we need beforeEach?

  it("should display header and 40 movies", () => {
    cy.wait('@HomePage').then((interception) => {
      cy.get(".header-title").contains("Rancid Tomatillos!");
      cy.location("pathname").should("eq", "/");
      cy.get(".movie-container").children().should("have.length", 40);
      cy.get(".movie-container").children().eq(0).as("moneyPlaneCard");
      cy.get("@moneyPlaneCard")
        .find("img")
        .should("have.attr", "id")
        .should("eq", "694919");
        cy.get(".movie-container").children().eq(39).as("iStillBelieveCard");
        cy.get("@iStillBelieveCard")
          .find("img")
          .should("have.attr", "id")
          .should("eq", "585244");
    })
  })

  it('should display a helpful message to the user when an error occurs', () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500
      }
    ).visit("http://localhost:3000");
    cy.get(".error-message").should('exist');
  })

  it('should display a helpful message to the user when an error occurs', () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 400
      }
    ).visit("http://localhost:3000");
    cy.get(".error-message").should('exist');
  })

  it('should display a helpful message to the user when an error occurs', () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 300
      }
    ).visit("http://localhost:3000");
    cy.get(".error-message").should('exist');
  })
})




