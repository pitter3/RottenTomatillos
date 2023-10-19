// describe("Single movie page user flow, should", () => {
//   beforeEach(() => {
//     cy.intercept(
//       "GET",
//       "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
//       {
//         statusCode: 200,
//         fixture: "example.json",
//       }
//     ).visit("http://localhost:3000/");
//     cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
//       statusCode: 200,
//       fixture: 'singleData.json'
//     })
//   });

//   it("should display first movie and show details", () => {
//     cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
//       statusCode: 200,
//       fixture: 'singleData.json'
//     }).as()
//   });






// });
