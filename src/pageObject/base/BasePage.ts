import { Page, test } from '@playwright/test';
import { ReloadOptions } from "./types";

export abstract class BasePage {
  protected page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }

  // Описываем базовые действия со страницей

  /**
   * Обновление страницы
   * @param options
   */
  async reload(options?: ReloadOptions) {
    await test.step(`Обновление страницы: ${this.page.url()}`, async () => {
      await this.page.reload(options);
    });
  }

  async goTo(path: string) {
    await test.step(`Открытие страницы: "${path}"`, async() => {
      await this.page.goto(path);
    })
  }
}
