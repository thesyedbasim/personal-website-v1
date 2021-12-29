/// <reference types="Cypress" />

/**
 * A function that submits the contact form
 * @param topic - Which topic to select for submitting
 * @example submitContactForm('web-dev')
 */
const submitContactForm = (topic: 'web-dev' | 'design') => {
	it(`fills the form with ${topic} and submits`, () => {
		cy.visit('/contact');

		cy.get('input#fullName').type('Syed Basim');
		cy.get('input#email').type('basimsyed4@gmail.com');
		cy.get('select#topic').select(topic);
		cy.get('input#subject').type('Want to get a website');
		cy.get('textarea#message').type('Some info about the project');
		cy.get('input[type="submit"]').click();

		cy.get('.Toastify__toast-container');
	});
};

describe('Navigation Links', () => {
	it('checks navbar links', () => {
		cy.visit('/');

		it('should navigate to the home page', () => {
			cy.get('.Navigation_nav-container__l653k')
				.get('li')
				.contains('Syed Basim')
				.click({ force: true });
			cy.url().should('eq', '/');
		});
		it('should navigate to services section', () => {
			cy.get('.Navigation_nav-container__l653k')
				.get('li')
				.contains('Services')
				.click({ force: true });
			cy.url().should('eq', `${Cypress.config().baseUrl}/#services`);
		});
		it('should navigate to why me section', () => {
			cy.get('.Navigation_nav-container__l653k')
				.get('li')
				.contains('Why me')
				.click({ force: true });
			cy.url().should('eq', `${Cypress.config().baseUrl}/#why-me`);
		});
		it('should contain github link', () => {
			cy.get('.Navigation_nav-container__l653k').get('li').contains('GitHub');
		});
		it('should navigate to newsletter section', () => {
			cy.get('.Navigation_nav-container__l653k')
				.get('li')
				.contains('Newsletter')
				.click({ force: true });
			cy.url().should('eq', `${Cypress.config().baseUrl}/#newsletter`);
		});
		it('should navigate to contact page', () => {
			cy.visit('/');

			cy.get('.Navigation_nav-item--right__3QjAx').click();

			cy.url().should('eq', `${Cypress.config().baseUrl}/contact`);
			cy.get('#topic').should('have.value', 'web-dev');
		});
	});
});

describe('Home page links', () => {
	it('should navigate to what i do section', () => {
		cy.visit('/');

		cy.get('header footer a').first().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/#services`);
	});

	it('should navigate to contact page', () => {
		cy.visit('/');

		cy.get('header footer a').last().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/contact`);

		cy.get('#topic').should('have.value', 'web-dev');
	});

	it('should navigate to contact page with work="web-dev" query param', () => {
		cy.visit('/');

		cy.get('#website-development footer a').first().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/contact?work=web-dev`);

		cy.get('#topic').should('have.value', 'web-dev');
	});

	it('should navigate to contact page with work="ui-design" query param', () => {
		cy.visit('/');

		cy.get('#ui-ux-design footer a').first().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/contact?work=design`);

		cy.get('#topic').should('have.value', 'design');
	});

	it('should navigate to contact page', () => {
		cy.visit('/');

		cy.get('section.cta footer a').first().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/contact`);

		cy.get('#topic').should('have.value', 'web-dev');
	});
});

describe('Contact form', () => {
	// it('should contain contact email', () => {
	// 	cy.contains('business@syedbasim.com');
	// });

	submitContactForm('web-dev');
	submitContactForm('design');
});

//test 404
describe('404 page', () => {
	it('should navigate to non existing page and should contain 404 text', () => {
		cy.visit('/page-not-existing', { failOnStatusCode: false });

		cy.contains('404');
	});

	it('should navigate to home page', () => {
		cy.visit('/page-not-existing', { failOnStatusCode: false });

		cy.get('footer a').first().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/`);
	});

	it('should navigate to home page', () => {
		cy.visit('/page-not-existing', { failOnStatusCode: false });

		cy.get('footer a').last().click();
		cy.url().should('eq', `${Cypress.config().baseUrl}/contact`);
	});
});

export {};
