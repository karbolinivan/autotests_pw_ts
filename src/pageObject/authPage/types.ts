import {Input} from "../base/pageElements/inputs";
import {Button} from "../base/pageElements/button";

// Инпуты Auth
export interface AuthInputs {
    login: Input,
    password: Input,
}

// Кнопоки Auth
export interface AuthButtons {
    continue: Button
}
