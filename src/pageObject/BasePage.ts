import { Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
}
