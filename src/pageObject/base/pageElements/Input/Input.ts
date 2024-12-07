import { test } from "@playwright/test";
import { BaseElement } from "../BaseElement";

export class Input extends BaseElement {

    // Описываем  базовые  действия с инпутами на странице

    /**
     * Заполняет поле текстом
     * @param text
     * @param options
     */
    async fill(text: string, options?: FillOptions) {
        await test.step(`Запонить поле: "${this.name}"`, async () => {
            await this.locator.fill(text, options);
        })
    }
}