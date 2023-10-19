describe("template spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "example.json",
      }
    );
    cy.visit("http://localhost:3000/");
  });

  it("should display header", () => {
    cy.get(".header-title").contains("Rancid Tomatillos!");
    cy.location("pathname").should("eq", "/");
  });

  it("should display all movies", () => {
    cy.get(".movie-container").children().should("have.length", 40);
  });

  it("should display Money Plane movie first", () => {
    cy.get(".movie-container").children().eq(0).as("moneyPlaneCard");
    cy.get("@moneyPlaneCard")
      .find("img")
      .should("have.attr", "id")
      .should("eq", "694919");
  });
  it("should display I Still Believe movie last", () => {
    cy.get(".movie-container").children().eq(39).as("iStillBelieveCard");
    cy.get("@iStillBelieveCard")
      .find("img")
      .should("have.attr", "id")
      .should("eq", "585244");
  });
});

// cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 200,
//       fixture: "singleData.json"
