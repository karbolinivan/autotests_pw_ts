import { expect, Locator, test } from "@playwright/test";
import { ToBeVisibleOptions } from "./types";

export abstract class BaseElement {
    protected name: string;
    protected locator: Locator;

    constructor(name: string, locator: Locator) {
        this.name = name;
        this.locator = locator;
    };

    // Описываем базовые действия с элементами на странице

    /**
     * Проверяет отображение элемента на странице
     * @param options
     */
    async toBeVisible(options?: ToBeVisibleOptions) {
        await test.step(`Элемент "${this.name}" отображается на странице`, async () => {
            await expect(this.locator).toBeVisible(options);
        })
    }
}