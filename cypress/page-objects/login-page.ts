/// <reference types="cypress" />

import BasePage from './base-page';

class LoginPage extends BasePage {
  private userNameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';

  // Method to login with credentials
  public login(username: string, password: string) {
    this.type(this.userNameInput, username);
    this.type(this.passwordInput, password);
    this.click(this.loginButton);
    cy.logAndReport(`==> Successfully logged in with username: ${username}`);
  }
  public verifyPageTitleDisplayedCorrectly(titleContains: string) {
    cy.title().should('contain', titleContains);
    cy.logAndReport(
      `==> Sucessfully verified Page title displayed, it contains - ${titleContains}`,
    );
  }
}

export default LoginPage;
