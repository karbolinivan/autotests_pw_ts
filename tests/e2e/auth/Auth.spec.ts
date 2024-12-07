import { test } from "@playwright/test";
import { AuthPage } from "../../../src/pageObject/authPage"
import { TEST_USER } from "../../testData/constants";
import { Resource } from "../../../src/pageObject";
import * as allure from "allure-js-commons";


test.describe('Авторизация', async() => {
    let authPage: AuthPage;

    test.beforeEach(async ({ page }) => {
        await allure.labels(
            { name: allure.LabelName.LAYER, value: 'e2e' },
            { name: allure.LabelName.EPIC, value: 'Авторизация и регистрация' },
            { name: allure.LabelName.FEATURE, value: 'Авторизация' },
        );
        authPage = new Resource().getAuthPage(page);
    })

    test('Авторизация тестового пользователя', async() => {
        await authPage.authorization(TEST_USER);
    })
})