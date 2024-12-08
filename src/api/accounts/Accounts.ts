import { Client } from "../base";
import { test } from "@playwright/test";
import { AccountType } from "./types";
import { AxiosResponse } from "axios";
import { ACCOUNT_ENDPOINTS } from "./constants";

export class Accounts extends Client {

    public async createAccount(account: AccountType): Promise<AxiosResponse> {
        return await test.step('Создание нового аккаунта', async() => {
            return await this.post({ url: ACCOUNT_ENDPOINTS.CREATE_ACCOUNT, data: account})
        })
    }

    public async getAccountById(account: AccountType): Promise<AxiosResponse> {
        return await test.step(`Получение аккаунта по id: ${account.id}`, async() => {
            return await this.get({ url: `${ACCOUNT_ENDPOINTS.ACCOUNTS}/${account.id}`})
        })
    }
}