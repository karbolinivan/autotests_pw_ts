import { test } from "@playwright/test";
import { BaseElement } from "../BaseElement";
import {ClickOptions} from "./types";

export class Button extends BaseElement {

    // Описываем  базовые  действия с кнопками на странице

    /**
     * Нажатие на кнопку
     */
    async click() {
        await test.step(`Нажать на кнопку: "${this.name}"`, async () => {
            await this.locator.click();
        })
    }


    /**
     * Двойное нажатие на кнопку
     */
    async doubleClick() {
        await test.step(`Двойное нажатие на кнопку: "${this.name}"`, async () => {
            await this.locator.click({ clickCount: 2 });
        })
    }


    /**
     * Нажатие на кнопку с кастомными параметрами
     * @param options
     */
    async clickWithOptions(options?: ClickOptions) {
        await test.step(`Кастомное нажатие на кнопку: "${this.name}"`, async () => {
            await this.locator.click(options);
        })
    }
}