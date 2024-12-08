import { Page } from "@playwright/test";
import { AuthPage } from "./authPage/Auth";

/** Общий класс для доступа ко всем страницам на ресурсе */
export class Pages {
    protected page: Page;

    constructor(page: Page){
        this.page = page
    }

    public auth(): AuthPage {
        return new AuthPage(this.page);
    }
}
