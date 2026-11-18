import { test, expect, Page } from '@playwright/test';
import { loginPage } from '../Test Example/loginPage';
import { productsPage } from '../Test Example/productsPage';
import { product1, userInfo } from '../Test Example/userDate';

test('Add products to cart', async ({ page }) => {
  const ProductsPage = new productsPage(page);
  const LoginPage = new loginPage(page);
  await LoginPage.fullRegistr(userInfo);
  await LoginPage.loginUser(userInfo);
  await ProductsPage.goToProductsPage();
  await ProductsPage.addToCart(product1);
  await LoginPage.deleteUser();
});
