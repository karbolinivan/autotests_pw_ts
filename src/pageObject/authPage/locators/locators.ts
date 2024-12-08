import { AuthButtonsLocators, AuthInputsLocators, AuthLocators } from "./types";

/** Локаторы инпутов для страницы Auth */
const AUTH_INPUTS_LOCATORS: AuthInputsLocators = {
    LOGIN: 'input[name="username"]',
    PASSWORD: 'input[name="password"]',
};

/** Локаторы кнопок для страницы Auth */
const AUTH_BUTTONS_LOCATORS: AuthButtonsLocators = {
    LOG_IN: 'input[value="Log In"]',
};

/** Общий набор локаторов для страницы Auth */
export const AUTH_LOCATORS: AuthLocators = {
    INPUTS: AUTH_INPUTS_LOCATORS,
    BUTTONS: AUTH_BUTTONS_LOCATORS
};
