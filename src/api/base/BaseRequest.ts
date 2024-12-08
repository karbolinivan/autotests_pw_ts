import { Logger } from "../../utils";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import { HTTPS, API } from "./constants";


/** Описываем дефолтный запрос и подключаем логгер */
export class BaseRequest extends Logger {
    protected axios: AxiosInstance

    constructor() {
        super();
        this.axios = axios.create({
            baseURL: HTTPS + process.env.BASE_URL + API,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
            validateStatus: (status) => status < 500,
        })
    }

    public async execute(params: AxiosRequestConfig): Promise<AxiosResponse> {
         return await this.axios.request(params)
    }
}
