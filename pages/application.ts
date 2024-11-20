import { Page } from "@playwright/test";
// Import the Playwright Page module

import registrationPage from "./registrationPage";
// Import the RegistrationPage class to handle actions on the registration page

export default class Application {
    // Define the Application class as the main wrapper for the app's pages

    protected page: Page;
    // A protected instance of the Playwright Page, ensuring it is accessible only within this class or its subclasses

    registrationPage: registrationPage;
    // An instance of the RegistrationPage class to access its methods and properties

    constructor(page: Page) {
        // Constructor to initialize the Application class with a Playwright Page instance
        this.page = page;
        // Assign the passed Playwright Page instance to the protected `page` variable

        this.registrationPage = new registrationPage(page);
        // Initialize the RegistrationPage class with the current Playwright Page
    }
}
