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
        cy.get(".movie-container").children().eq(39).as("iStillBelieveCard"); //.last
        cy.get("@iStillBelieveCard")
          .find("img")
          .should("have.attr", "id")
          .should("eq", "585244");
    })
  })
})

//need error handling

// cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 200,
//       fixture: "singleData.json"

