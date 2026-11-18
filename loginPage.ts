import { expect, Page } from '@playwright/test';
import { basePage } from './basePage';
import { userData, userInfo } from './userDate';

export class loginPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  // ALL LOCATORS in Login Page

  signUpNameInput = this.page.locator('[data-qa="signup-name"]');
  signUpEmailInput = this.page.locator('[data-qa="signup-email"]');
  signUpButton = this.page.locator('[data-qa="signup-button"]');
  genderRadio = this.page.locator('#id_gender1');
  nameInput = this.page.locator('[data-qa="name"]');
  emailInput = this.page.locator('#email');
  passInput = this.page.locator('#password');
  dayOfBirth = this.page.locator('#days');
  monthOfBirth = this.page.locator('#months');
  yearOfBirth = this.page.locator('#years');
  firstName = this.page.locator('#first_name');
  lastName = this.page.locator('#last_name');
  company = this.page.locator('#company');
  address = this.page.locator('#address1');
  country = this.page.locator('[data-qa="country"]');
  state = this.page.locator('#state');
  city = this.page.locator('#city');
  zipCode = this.page.locator('#zipcode');
  mobileNumber = this.page.locator('#mobile_number');
  createAccBtn = this.page.locator('[data-qa="create-account"]');
  continueBtn = this.page.locator('[data-qa="continue-button"]');
  loginEmailInput = this.page.locator('[data-qa="login-email"]');
  loginPasswordInput = this.page.locator('[data-qa="login-password"]');
  loginBtn = this.page.getByRole('button', { name: 'Login' });
  logoutBtn = this.page.getByText('Logout');
  deleteBtn = this.page.locator('a[href="/delete_account"]');

  async loginUser(userInfo: userData) {
    await this.page.goto('https://www.automationexercise.com/login');
    await this.loginEmailInput.fill(userInfo.email);
    await this.loginPasswordInput.fill(userInfo.password);
    await this.loginBtn.click();
  }

  async fullRegistr(userInfo: userData) {
    await this.page.goto('https://www.automationexercise.com/login');
    await this.signUpEmailInput.fill(userInfo.email);
    await this.signUpNameInput.fill(userInfo.firstName);
    await this.signUpButton.click();
    await this.genderRadio.click();
    await this.nameInput.fill(userInfo.firstName);
    if (await this.emailInput.isEditable()) {
      this.emailInput.fill(userInfo.email);
    }
    await this.passInput.fill(userInfo.password);
    await this.dayOfBirth.selectOption(userInfo.day);
    await this.monthOfBirth.selectOption(userInfo.month);
    await this.yearOfBirth.selectOption(userInfo.year);
    await this.firstName.fill(userInfo.firstName);
    await this.lastName.fill(userInfo.lastName);
    await this.company.fill(userInfo.company);
    await this.address.fill(userInfo.address);
    await this.country.selectOption(userInfo.country);
    await this.state.fill(userInfo.state);
    await this.city.fill(userInfo.city);
    await this.zipCode.fill(userInfo.zipcode);
    await this.mobileNumber.fill(userInfo.mobileNumber);
    await this.createAccBtn.click();
    await expect(this.page.getByText('Account created!')).toBeVisible;
    await this.continueBtn.click();
    await this.logoutBtn.click();
  }

  async deleteUser() {
    await this.deleteBtn.click();
    await expect(this.page.getByText('Account Deleted!')).toBeVisible;
  }
}
