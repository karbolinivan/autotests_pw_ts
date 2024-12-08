import { test } from "@playwright/test";
import { AuthPage } from "../../../src/pageObject/authPage/Auth";
import { TEST_USER } from "../../../src/testData";
import { Pages } from "../../../src/pageObject";
import * as allure from "allure-js-commons";


test.describe('Авторизация', async() => {
    let authPage: AuthPage;

    test.beforeEach(async ({ page }) => {
        await allure.labels(
            { name: allure.LabelName.LAYER, value: 'e2e' },
            { name: allure.LabelName.EPIC, value: 'Авторизация и регистрация' },
            { name: allure.LabelName.FEATURE, value: 'Авторизация' },
        );
        authPage = new Pages(page).auth();
    })

    test('Авторизация тестового пользователя', async() => {
        await authPage.authorization(TEST_USER);
    })
})