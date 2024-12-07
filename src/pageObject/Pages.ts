import { AuthPage } from "./authPage";
import { Page } from "@playwright/test";

export class Pages {
    public authPage(page: Page): AuthPage {
        return new AuthPage(page)
    }
}
