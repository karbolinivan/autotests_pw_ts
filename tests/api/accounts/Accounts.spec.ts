import { test } from "@playwright/test";
import * as allure from "allure-js-commons";
import { Expect } from "../../../src/api";
import { HttpStatusCode } from "axios";
import { Accounts } from "../../../src/api";


test.describe('Accounts', async() => {
    let accounts = new Accounts();

    test.beforeEach(async () => {
        await allure.labels(
            { name: allure.LabelName.LAYER, value: 'api' },
            { name: allure.LabelName.EPIC, value: 'Accounts' },
            { name: allure.LabelName.FEATURE, value: 'Get Account By Id' },
        );
    })

    test('Получение аккаунта по несуществующему id', async() => {
        const badId = 123;
        const resp = await accounts.getAccountById({ id: badId });
        await Expect.statusCode(resp, HttpStatusCode.BadRequest);
    })
})