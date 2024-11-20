import { expect, Locator, Page } from "@playwright/test";
// Import Playwright's utilities for page and locator management
import Base from "./base";
// Extend the Base class to inherit common functionalities

export default class registrationPage extends Base {
    // The `registrationPage` class manages interactions with the registration page

    constructor(page: Page) {
        super(page); // Call the parent `Base` class constructor
        this.page = page; // Assign the current page instance
    }

    // Define selectors for page elements
    selectors = {
        getStartedButton: '[title="Get Started"]',
        applicantTypeOption: '[aria-label="Employee"]',
        productOption: '[aria-label="Supplemental Life"]',
        nextButton: '[title="Next"]',
        firstNameField: '#first_name',
        lastNameField: '#last_name',
        emailField: '#email-input',
        salaryField: '#input-number',
        supplementalLifeCoverage: '#coverage-slider-wrapper',
        dateOfBirthField: '#date-input',
        genderOption: '[aria-label="Male"]',
        phoneNumberField: '#input-phone',
        cantFindMyAddressOption: '#btn-toggle-autocomplete',
        streetField: '#address-input-street',
        aptField: '#address-input-apt-unit',
        cityField: '#address-input-city',
        stateDropdown: '#address-input-state',
        dropdownOption: '[role="menuitem"]',
        zipcodeField: '[name="address.zipCode"]',
        releaseAgreeCheckbox: '#address-check-auth-release-agree',
        consentBusinessCheckbox: '#address-check-consent-business',
        heightDropdown: '#dropdown-height',
        weightDropdown: '#input-weight',
        noOption: '#radio-no',
        noneOfTheAboveCheckbox: '#checkbox-none-of-above',
        signYourApplication: '[type="submit"]',
        youAreApprovedText: '#page-title'
    };

    // Getters for locators
    get getStartedButton(): Locator {
        return this.page.locator(this.selectors.getStartedButton);
    }

    get applicantTypeOption(): Locator {
        return this.page.locator(this.selectors.applicantTypeOption);
    }

    get productOption(): Locator {
        return this.page.locator(this.selectors.productOption);
    }

    get nextButton(): Locator {
        return this.page.locator(this.selectors.nextButton);
    }

    get firstNameField(): Locator {
        return this.page.locator(this.selectors.firstNameField);
    }

    get lastNameField(): Locator {
        return this.page.locator(this.selectors.lastNameField);
    }

    get emailField(): Locator {
        return this.page.locator(this.selectors.emailField);
    }

    get salaryField(): Locator {
        return this.page.locator(this.selectors.salaryField);
    }

    get supplementalLifeCoverage(): Locator {
        return this.page.locator(this.selectors.supplementalLifeCoverage);
    }

    get dateOfBirthField(): Locator {
        return this.page.locator(this.selectors.dateOfBirthField);
    }

    get genderOption(): Locator {
        return this.page.locator(this.selectors.genderOption);
    }

    get phoneNumberField(): Locator {
        return this.page.locator(this.selectors.phoneNumberField);
    }

    get cantFindMyAddressOption(): Locator {
        return this.page.locator(this.selectors.cantFindMyAddressOption);
    }

    get streetField(): Locator {
        return this.page.locator(this.selectors.streetField);
    }

    get aptField(): Locator {
        return this.page.locator(this.selectors.aptField);
    }

    get cityField(): Locator {
        return this.page.locator(this.selectors.cityField);
    }

    get stateDropdown(): Locator {
        return this.page.locator(this.selectors.stateDropdown);
    }

    get dropdownOption(): Locator {
        return this.page.locator(this.selectors.dropdownOption).nth(0);
    }

    get zipcodeField(): Locator {
        return this.page.locator(this.selectors.zipcodeField);
    }

    get releaseAgreeCheckbox(): Locator {
        return this.page.locator(this.selectors.releaseAgreeCheckbox);
    }

    get consentBusinessCheckbox(): Locator {
        return this.page.locator(this.selectors.consentBusinessCheckbox);
    }

    get heightDropdown(): Locator {
        return this.page.locator(this.selectors.heightDropdown);
    }

    get weightDropdown(): Locator {
        return this.page.locator(this.selectors.weightDropdown);
    }

    get noOption(): Locator {
        return this.page.locator(this.selectors.noOption);
    }

    get noneOfTheAboveCheckbox(): Locator {
        return this.page.locator(this.selectors.noneOfTheAboveCheckbox);
    }

    get signYourApplication(): Locator {
        return this.page.locator(this.selectors.signYourApplication);
    }

    get youAreApprovedText(): Locator {
        return this.page.locator(this.selectors.youAreApprovedText);
    }

    // Methods for interactions
    async clickOnGetStartedButton(): Promise<void> {
        await expect(this.getStartedButton).toBeVisible();
        await this.getStartedButton.click();
    }

    async selectApplicantType(): Promise<void> {
        await expect(this.applicantTypeOption).toBeVisible();
        await this.applicantTypeOption.click();
    }

    async selectProduct(): Promise<void> {
        await expect(this.productOption).toBeVisible();
        await this.productOption.click();
    }

    async clickOnNextButton(): Promise<void> {
        await expect(this.nextButton).toBeVisible();
        await this.nextButton.click();
    }

    async enterFirstName(firstname: string): Promise<void> {
        await expect(this.firstNameField).toBeVisible();
        await this.firstNameField.click();
        await this.firstNameField.fill(firstname);
    }

    async enterLastName(lastname: string): Promise<void> {
        await expect(this.lastNameField).toBeVisible();
        await this.lastNameField.click();
        await this.lastNameField.fill(lastname);
    }

    async enterEmail(email: string): Promise<void> {
        await expect(this.emailField).toBeVisible();
        await this.emailField.click();
        await this.emailField.fill(email);
    }

    async enterSalary(salary: string): Promise<void> {
        await expect(this.salaryField).toBeVisible();
        await this.salaryField.click();
        await this.salaryField.fill(salary);
    }

    async selectLifeCoverageAmount(): Promise<void> {
        await expect(this.supplementalLifeCoverage).toBeVisible();
        await this.supplementalLifeCoverage.click();
    }

    async enterDateOfBirth(dob: string): Promise<void> {
        await expect(this.dateOfBirthField).toBeVisible();
        await this.dateOfBirthField.click();
        await this.dateOfBirthField.fill(dob);
    }

    async selectGender(): Promise<void> {
        await expect(this.genderOption).toBeVisible();
        await this.genderOption.click();
    }

    async enterPhoneNumber(phonenumber: string): Promise<void> {
        await expect(this.phoneNumberField).toBeVisible();
        await this.phoneNumberField.click();
        await this.phoneNumberField.fill(phonenumber);
    }

    async clickOnICantFindMyAddress(): Promise<void> {
        await expect(this.cantFindMyAddressOption).toBeVisible();
        await this.cantFindMyAddressOption.click();
    }

    async enterStreet(street: string): Promise<void> {
        await expect(this.streetField).toBeVisible();
        await this.streetField.click();
        await this.streetField.fill(street);
    }

    async enterAptNumber(aptnumber: string): Promise<void> {
        await expect(this.aptField).toBeVisible();
        await this.aptField.click();
        await this.aptField.fill(aptnumber);
    }

    async enterCity(city: string): Promise<void> {
        await expect(this.cityField).toBeVisible();
        await this.cityField.click();
        await this.cityField.fill(city);
    }

    async selectState(): Promise<void> {
        await expect(this.stateDropdown).toBeVisible();
        await this.stateDropdown.click();
        await this.dropdownOption.click();
    }

    async enterZipCode(zip: string): Promise<void> {
        await expect(this.zipcodeField).toBeVisible();
        await this.zipcodeField.click();
        await this.zipcodeField.fill(zip);
    }

    async selectReleaseAgreeCheckbox(): Promise<void> {
        await expect(this.releaseAgreeCheckbox).toBeVisible();
        await this.releaseAgreeCheckbox.click();
    }

    async selectConsentBusinessCheckbox(): Promise<void> {
        await expect(this.consentBusinessCheckbox).toBeVisible();
        await this.consentBusinessCheckbox.click();
    }

    async selectHeight(): Promise<void> {
        await expect(this.heightDropdown).toBeVisible();
        await this.heightDropdown.click();
        await this.dropdownOption.click();
    }

    async enterWeight(weight: string): Promise<void> {
        await expect(this.weightDropdown).toBeVisible();
        await this.weightDropdown.click();
        await this.weightDropdown.fill(weight);
    }

    async selectMedicationOption(): Promise<void> {
        await expect(this.noOption).toBeVisible();
        await this.noOption.click();
    }

    async selectPastTenYearstreatment(): Promise<void> {
        await expect(this.noneOfTheAboveCheckbox).toBeVisible();
        await this.noneOfTheAboveCheckbox.click();
    }

    async selectConsultationOption(): Promise<void> {
        await expect(this.noOption).toBeVisible();
        await this.noOption.click();
    }

    async clickOnSignYourApplicationButton(): Promise<void> {
        await expect(this.signYourApplication).toBeVisible();
        await this.signYourApplication.click();
    }

    async verifyApplicationIsApproved(): Promise<void> {
        await expect(this.youAreApprovedText).toBeVisible();
        await expect(this.youAreApprovedText).toHaveText("Your application has been submitted.");
    }
}