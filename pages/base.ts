import { Page, Locator } from "@playwright/test";
// Import Playwright's Page and Locator modules

export default abstract class Base {
  // Define an abstract class `Base` to provide common functionalities for all pages

  protected page: Page;
  // A protected instance of the Playwright Page, ensuring it is accessible only within this class or subclasses

  constructor(page: Page) {
    this.page = page;
    // Assign the Playwright Page instance passed to the constructor
  }

  protected abstract selectors: {};
  // An abstract property `selectors` to be implemented in derived classes for defining page-specific locators

  async goTo(url: string) {
    // A reusable method to navigate to a specified URL
    await this.page.goto(url);
    // Navigate to the given URL using Playwright's `goto` method
  }

  protected async type(element: Locator, text: string) {
    // A reusable method for typing text into an input field
    await element.click();
    // Click the input element to focus on it
    await element.fill(text);
    // Fill the input element with the provided text, replacing any existing content
  }

  async waitForPageReload() {
    // A reusable method to simulate waiting for a page reload or temporary delay
    await this.page.waitForTimeout(3000);
    // Wait for 3 seconds (3000ms) using Playwright's `waitForTimeout` method
  }
}
