describe('When user performs a sign in with valid credentials', () => {
	it('Then a login should be successful and the user has the access to the workspace', function () {
		const { onboarding, workspace } = this.skt.pages
		const email = this.skt.user.email
        const password = this.skt.user.password
        const username = this.skt.user.username
        cy.intercept('POST', '**/api/v1/metrics').as('loginRequest')

		cy.visit(onboarding.url)

		cy.get(onboarding.emailInput).type(email)
		cy.get(onboarding.passwordInput).type(password)
		cy.get(onboarding.loginButton).click()
        cy.wait('@loginRequest')
		cy.get(workspace.userAvatar).should('be.visible').and('contain.text', username)
		cy.url().should('match', /https:\/\/www.sketch.com\/workspace\/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}\/shares/)
	});
});

describe('When user performs a sign in with blank email and password', () => {
	it('Then a warning should be displayed asking for valid email and password', function () {
		const { onboarding, workspace } = this.skt.pages
        const emailWarning = 'Email can’t be blank'
        const passwordWarning = 'Password can’t be blank'

		cy.visit(onboarding.url)

		cy.get(onboarding.loginButton).click()
		cy.get(onboarding.emailWarning).should('be.visible').and('contain.text', emailWarning)
        cy.get(onboarding.passwordWarning).should('be.visible').and('contain.text', passwordWarning)
	});
});

describe('When user performs a sign in with valid email and blank password', () => {
	it('Then a warning should be displayed asking for a valid password', function () {
		const { onboarding, workspace } = this.skt.pages
		const email = this.skt.user.email
        const passwordWarning = 'Password can’t be blank'


		cy.visit(onboarding.url)

		cy.get(onboarding.emailInput).type(email)
		cy.get(onboarding.loginButton).click()
        cy.get(onboarding.passwordWarning).should('be.visible').and('contain.text', passwordWarning)
	});
});

describe('When user performs a sign in with blank email and valid password', () => {
	it('Then a warning should be displayed asking for a valid email', function () {
		const { onboarding, workspace } = this.skt.pages
        const emailWarning = 'Email can’t be blank'
        const password = this.skt.user.password

		cy.visit(onboarding.url)

		cy.get(onboarding.passwordInput).type(password)
		cy.get(onboarding.loginButton).click()
        cy.get(onboarding.emailWarning).should('be.visible').and('contain.text', emailWarning)
	});
});


describe('When user performs a sign in with valid email and wrong password', () => {
	it('Then a warning should be displayed for unsuccessful login', function () {
		const { onboarding, workspace } = this.skt.pages
		const email = this.skt.user.email
        const password = 'wrongPassword'
        const loginWarning = 'We couldn’t sign you in. Please check your details and try again.'

		cy.visit(onboarding.url)

        cy.get(onboarding.emailInput).type(email)
		cy.get(onboarding.passwordInput).type(password)
		cy.get(onboarding.loginButton).click()
        cy.get(onboarding.loginWarning).should('be.visible').and('contain.text', loginWarning)
	});
});


describe('When user performs a sign in with invalid email', () => {
	it('Then a warning should be displayed for invalid email', function () {
		const { onboarding, workspace } = this.skt.pages
		const email = 'emailtest.com'
        const password = this.skt.user.password
        const emailWarning = 'This is not a valid email'

		cy.visit(onboarding.url)

        cy.get(onboarding.emailInput).type(email)
        cy.get(onboarding.passwordInput).type(password)
        cy.get(onboarding.emailWarning).should('be.visible').and('contain.text', emailWarning)
	});
});
