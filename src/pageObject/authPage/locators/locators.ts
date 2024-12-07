import {AuthButtonsLocators, AuthInputsLocators, AuthLocators} from "./types";

// Локаторы инпутов для страницы Auth
const authInputsLocators: AuthInputsLocators = {
    login: 'input[name="username"]',
    password: 'input[name="password"]',
};

// Локаторы кнопок для страницы Auth
const authButtonsLocators: AuthButtonsLocators = {
    logIn: 'input[value="Log In"]',
};

// Общий набор локаторов для страницы Auth
export const authLocators: AuthLocators = {
    inputs: authInputsLocators,
    buttons: authButtonsLocators
};
