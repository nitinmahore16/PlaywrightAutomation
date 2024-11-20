import { Browser, BrowserContext, chromium, Page, test } from "@playwright/test";
// Import necessary Playwright modules and test utilities
import Application from "../pages/application";
// Import the Application page object model
import data from "../support/data";
// Import test data

let browser: Browser; // Define a browser instance
let context: BrowserContext; // Define a browser context instance
let page: Page; // Define a page instance
let App: Application; // Define an instance of the Application page object model

// Launch the browser before all tests
test.beforeAll(async () => {
  browser = await chromium.launch(); // Launch the Chromium browser
});

// Set up a new context and page for each test
test.beforeEach(async () => {
  context = await browser.newContext(); // Create a new browser context
  page = await context.newPage(); // Open a new page
  App = new Application(page); // Initialize the Application object with the current page
});

// Clean up the page and context after each test
test.afterEach(async () => {
  await page.close(); // Close the page
  await context.close(); // Close the context
});

// Close the browser after all tests
test.afterAll(async () => {
  await browser.close(); // Close the browser
});

// Test case for user registration
test("Registration Test", async () => {
  // Navigate to the registration page
  await page.goto('https://d28j9pfwubj8q5.cloudfront.net/5U5PU/S2xbn/UGFnZV8w');

  // Interact with the registration page elements
  await App.registrationPage.clickOnGetStartedButton(); // Click the "Get Started" button
  await App.registrationPage.selectApplicantType(); // Select the type of applicant
  await App.registrationPage.selectProduct(); // Select the desired product
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button

  // Fill in user details
  await App.registrationPage.enterFirstName(data.firstname); // Enter the first name
  await App.registrationPage.enterLastName(data.lastname); // Enter the last name
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button
  await App.registrationPage.enterEmail(data.email); // Enter the email address
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button

  // Fill in financial details
  await App.registrationPage.enterSalary(data.salary); // Enter the salary
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button
  await App.registrationPage.selectLifeCoverageAmount(); // Select the life coverage amount
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button

  // Fill in personal details
  await App.registrationPage.enterDateOfBirth(data.dateOfBirth); // Enter the date of birth
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button
  await App.registrationPage.selectGender(); // Select the gender
  await App.registrationPage.enterPhoneNumber(data.phoneNumber); // Enter the phone number
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button

  // Address details
  await App.registrationPage.clickOnICantFindMyAddress(); // Click the "I Can't Find My Address" option
  await App.registrationPage.enterStreet(data.street); // Enter the street address
  await App.registrationPage.enterAptNumber(data.aptNumber); // Enter the apartment number
  await App.registrationPage.enterCity(data.city); // Enter the city
  await App.registrationPage.selectState(); // Select the state
  await App.registrationPage.enterZipCode(data.zip); // Enter the ZIP code

  // Agree to terms and conditions
  await App.registrationPage.selectReleaseAgreeCheckbox(); // Agree to release terms
  await App.registrationPage.selectConsentBusinessCheckbox(); // Agree to consent terms
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button

  // Health details
  await App.registrationPage.selectHeight(); // Select height
  await App.registrationPage.enterWeight(data.weight); // Enter weight
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button
  await App.registrationPage.selectMedicationOption(); // Select the medication option
  await App.registrationPage.selectPastTenYearstreatment(); // Select past ten years treatment option
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button
  await App.registrationPage.selectPastTenYearstreatment(); // Reconfirm past ten years treatment
  await App.registrationPage.clickOnNextButton(); // Click the "Next" button
  await App.registrationPage.selectConsultationOption(); // Select consultation option

  // Sign application
  await App.registrationPage.enterFirstName(data.firstname); // Re-enter the first name
  await App.registrationPage.enterLastName(data.lastname); // Re-enter the last name
  await App.registrationPage.clickOnSignYourApplicationButton(); // Click to sign the application

  // Verify application approval
  await App.registrationPage.verifyApplicationIsApproved(); // Verify that the application is approved
});
