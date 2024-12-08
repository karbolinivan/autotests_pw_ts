import { BaseRequest } from "./BaseRequest";
import { AxiosRequestConfig, AxiosResponse } from "axios";


/** Описываем http методы */
export class Client extends BaseRequest{

    public async get(params: AxiosRequestConfig): Promise<AxiosResponse> {
        return await this.execute({method: 'GET', ...params})
    }

    public async post(params: AxiosRequestConfig): Promise<AxiosResponse> {
        return await this.execute({method: 'POST', ...params})
    }

    public async put(params: AxiosRequestConfig): Promise<AxiosResponse> {
        return await this.execute({method: 'PUT', ...params})
    }

    public async patch(params: AxiosRequestConfig): Promise<AxiosResponse> {
        return await this.execute({method: 'PATCH', ...params})
    }

    public async delete(params: AxiosRequestConfig): Promise<AxiosResponse> {
        return await this.execute({method: 'DELETE', ...params})
    }
}