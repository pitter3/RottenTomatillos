describe("Single Movie user flow", () => {
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
    });
    
    
    it("should display header and 40 movies", () => {
      cy.intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
        {
          statusCode: 200,
          fixture: 'moneyplane'
        }
      ).as('MoneyPlane')
      cy.intercept(
        "GET",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244",
        {
          statusCode: 200,
          fixture: 'istillbelieve'
        }
      ).as('IStillBelieve')
      cy.wait('@HomePage').then((interception) => {
        cy.get(".movie-container").children().eq(0).click()
        cy.wait('@MoneyPlane').then((interception) => {
          cy.get(".movie-title").contains("Money Plane");
          cy.get('.movie-overview').contains("Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
          cy.get('.movie-tagline').contains("The world needed a hero. It got Black Adam.")
          cy.get('.movie-average-rating').contains("Average Rating: 6.666666666666667 / 10")
          cy.get('.movie-release-date').contains("Release Date: 2020-09-29")
          cy.get('.movie-genres').contains("Genres: Action, Fantasy, Science Fiction")
          cy.get('img').should("have.attr", "src").should("eq", "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg");
        })
        cy.get('button').click()
        cy.get(".movie-container").children().eq(39).click();
        cy.wait('@IStillBelieve').then((interception) => {
          cy.get(".movie-title").contains("I Still Believe");
          cy.get('.movie-overview').contains("A compelling story of love and hope");
          cy.get('.movie-tagline').contains("Believe in the power of love.");
          cy.get('.movie-average-rating').contains("Average Rating: 3.8333333333333335 / 10");
          cy.get('.movie-release-date').contains("Release Date: 2020-03-12");
          cy.get('.movie-genres').contains("Genres: Drama, Romance");
          cy.get('img').should("have.attr", "src").should("eq", "https://image.tmdb.org/t/p/original//21Q8bzu10YF9i4O5amBkJBombYo.jpg");
        });
      })
    })
})














//   it("should display a single movie if clicked", () => {
//     // Intercept the API request for a specific movie
//     cy.intercept(
//       "GET",
//       "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
//       {
//         statusCode: 200,
//         fixture: "moneyplane.json",
//       }
//     ).as("getMovie");
  
//     cy.get('.card').first().click();
  
//     // Wait for the XHR request to complete
//     cy.wait("@getMovie");
  
//     cy.url().should('eq', 'http://localhost:3000/SingleMovie/694919');
    
//     // You can proceed with further assertions or actions after the request is complete
//   });
// })

// cy.intercept(
//   "GET",
//   "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
//   {
//     statusCode: 200,
//     fixture: "moneyplane.json",
//   }
// );
// cy.get('.card').first().click() 
// .url().should('eq', 'http://localhost:3000/SingleMovie/694919') 
// });

// cy.intercept(
//   "GET",
//   "https://rancid-tomatillos.herokuapp.com/api/v2/movies/585244",
//   {
//     statusCode: 200,
//     fixture: "istillbelieve.json",
//   }
// );
// cy.get('.card').last().click() // will need this to test the click
// .url().should('eq', 'http://localhost:3000/SingleMovie/585244') //fix this, need to test the click
// });
