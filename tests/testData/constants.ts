import { TestUser } from "./types";
import dotenv from 'dotenv';
dotenv.config();

export const TEST_USER: TestUser = {
    login: process.env.TEST_LOGIN || '',
    password: process.env.TEST_PASSWORD || ''
}
