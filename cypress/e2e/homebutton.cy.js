describe("Home button user flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "example",
      }
    ).as("HomePage");
    cy.visit("http://localhost:3000/");
  });

  it("should bring the user to the home page on click", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        statusCode: 200,
        fixture: "moneyplane",
      }
    ).as("MoneyPlane");

    cy.wait("@HomePage").then((interception) => {
      cy.get(".movie-container").children().eq(0).click();
      cy.wait("@MoneyPlane").then((interception) => {
        cy.get(".movie-title").contains("Money Plane");
        cy.get('button').click();
        // Add an assertion to ensure you are back on the home page.
        cy.url().should("eq", "http://localhost:3000/");
      });
    });
  });

  it("image should also act as a home button", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        statusCode: 200,
        fixture: "moneyplane",
      }
    ).as("MoneyPlane");

    cy.wait("@HomePage").then((interception) => {
      cy.get(".movie-container").children().eq(0).click();
      cy.get(".movie-title").contains("Money Plane");
      cy.get(".tomato-guy").click()
      // Add an assertion to ensure you are back on the home page.
    });
  });
});

