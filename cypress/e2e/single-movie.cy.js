describe("Single Movie user flow", () => {
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

  it("should display a detailed single movie page", () => {
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
        cy.get(".movie-overview").contains(
          "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        );
        cy.get(".movie-tagline").contains(
          "The world needed a hero. It got Black Adam."
        );
        cy.get(".details").contains("2020");
        cy.get(".movie-genre").contains(
          "Categories:Action, Fantasy, Science Fiction"
        );
        cy.get(".movie-image")
          .should("have.attr", "src")
          .should(
            "eq",
            "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"
          );
      });
    });
    
    it("should display last movie", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244",
      {
        statusCode: 200,
        fixture: "istillbelieve",
      }
    ).as("IStillBelieve");
      cy.get("button").click();
    cy.wait("@HomePage").then((interception) => {
      cy.get(".movie-container").children().eq(39).click();
      cy.wait("@IStillBelieve").then((interception) => {
        cy.get(".movie-title").contains("I Still Believe");
        cy.get(".movie-overview").contains(
          "A compelling story of love and hope"
        );
        cy.get(".movie-tagline").contains("Believe in the power of love.");
        cy.get(".details").contains("2020");
        cy.get(".movie-genre").contains("Categories:Drama, Romance");
        cy.get(".movie-image")
          .should("have.attr", "src")
          .should(
            "eq",
            "https://image.tmdb.org/t/p/original//21Q8bzu10YF9i4O5amBkJBombYo.jpg"
          );
        });
      });
    });
  })
})