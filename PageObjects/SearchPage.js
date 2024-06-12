export class  SearchPage {
    searchByName(){
        cy.get('#name-field').type('firstName');
        }
        searchButton(){
        cy.get('#search-button').click();
        }
        checkSearchColoumn(){
            cy.get('#listing-row-0 > #cell-2 > .clickable').should('contain', 'firstName');
        }
    }
