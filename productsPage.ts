import { Page, Locator, test } from '@playwright/test';
import { basePage } from './basePage';
import { products, products1, userData } from './userDate';

export class productsPage extends basePage {
  productsBtn = this.page.locator('[href="/products"]');
  womenCategoryBtn = this.page.locator('[href="#Women"]');

  constructor(page: Page) {
    super(page);
  }

  async goToProductsPage() {
    await this.productsBtn.click();
  }
  async addToCart(product: products) {
    this.page
      .getByText(product.name)
      .filter({ has: this.page.locator('[href="/product_details/"]') })
      .click();
  }
}
