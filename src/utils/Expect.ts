import {expect, test} from "@playwright/test";
import { AxiosResponse, HttpStatusCode } from "axios";

export class Expect {

    public static async statusCode(response: AxiosResponse, expectedStatusCode: HttpStatusCode) {
        await test.step(`Полученный статус-код "${response.status}" равен ожидаемому "${expectedStatusCode}"`, () => {
            expect(response.status).toBe(expectedStatusCode)
        })
    }
}