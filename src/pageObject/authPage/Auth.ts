import { BasePage, Button, Input } from "../base";
import { Page, test } from "@playwright/test";
import { AuthButtons, AuthInputs } from "./types";

import { TestUser } from "../../testData";
import { ENDPOINTS } from "../../constants";
import { authLocators } from "./";



export class AuthPage extends BasePage {
    protected path: string
    protected inputs: AuthInputs;
    protected buttons: AuthButtons;

    constructor(page: Page) {
        super(page);

        this.path = ENDPOINTS.AUTH;

        // Поля
        this.inputs = {
            login: new Input('Username', this.page.locator(authLocators.inputs.login)),
            password: new Input('Password', this.page.locator(authLocators.inputs.password))
        }

        // Кнопки
        this.buttons = {
            continue: new Button('LOG IN', this.page.locator(authLocators.buttons.logIn))
        }
    }

    // Базовые действия

    public async openAuthPage() {
        await this.goTo(this.path);
    }

    // Действия с полями
    /**
     * Заполняет поле логина
     * @param login
     */
    public async setLogin(login: string): Promise<void> {
        await this.inputs.login.fill(login);
    }

    /**
     * Заполняет поле пароля
     * @param password
     */
    public async setPassword(password: string): Promise<void> {
        await this.inputs.password.fill(password);
    }


    // Действия с кнопками
    /**
     * Нажатие на кнопку продолжить
     */
    public async clickOnContinue(): Promise<void> {
        await this.buttons.continue.click();
    }


    // Пользовательские действия
    /**
     * Авторизует пользователя на ресурсе
     * @param testUser
     */
    public async authorization(testUser: TestUser): Promise<void> {
        await test.step(`Авторизация пользователя: "${testUser.login}"`, async () => {
            await this.openAuthPage();
            await this.setLogin(testUser.login);
            await this.setPassword(testUser.password);
            await this.clickOnContinue();
        })
    }
}