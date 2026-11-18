import { test, expect } from '@playwright/test';
import { loginPage } from '../Test Example/loginPage';
import { userInfo } from '../Test Example/userDate';
test('User Registration Test', async ({ page }) => {
  const registration = new loginPage(page);
  await registration.fullRegistr(userInfo);
  await registration.loginUser(userInfo);
});
