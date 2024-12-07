import { AuthPage } from "./authPage";
import { Page } from "@playwright/test";

export class Resource {
    public getAuthPage(page: Page): AuthPage {
        return new AuthPage(page)
    }
}
