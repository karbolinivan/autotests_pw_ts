import { Page, test } from "@playwright/test";
import { AuthButtons, AuthInputs } from "./types";
import { TestUser } from "../../testData";
import { ENDPOINTS } from "../constants";
import { AUTH_LOCATORS } from "./locators/locators";
import { BasePage, Button, Input } from "../base";


export class AuthPage extends BasePage {
    protected path: string
    protected inputs: AuthInputs;
    protected buttons: AuthButtons;

    constructor(page: Page) {
        super(page);

        this.path = ENDPOINTS.AUTH;

        /** Поля */
        this.inputs = {
            login: new Input('Username', this.page.locator(AUTH_LOCATORS.INPUTS.LOGIN)),
            password: new Input('Password', this.page.locator(AUTH_LOCATORS.INPUTS.PASSWORD))
        }

        /** Кнопки */
        this.buttons = {
            continue: new Button('LOG IN', this.page.locator(AUTH_LOCATORS.BUTTONS.LOG_IN))
        }
    }

    /** Базовые действия */
    public async openAuthPage() {
        await this.goTo(this.path);
    }

    /** Действия с полями */
    public async setLogin(login: string): Promise<void> {
        await this.inputs.login.fill(login);
    }

    public async setPassword(password: string): Promise<void> {
        await this.inputs.password.fill(password);
    }


    /** Действия с кнопками */
    public async clickOnContinue(): Promise<void> {
        await this.buttons.continue.click();
    }


    /** Пользовательские действия */
    public async authorization(testUser: TestUser): Promise<void> {
        await test.step(`Авторизация пользователя: "${testUser.login}"`, async () => {
            await this.openAuthPage();
            await this.setLogin(testUser.login);
            await this.setPassword(testUser.password);
            await this.clickOnContinue();
        })
    }
}