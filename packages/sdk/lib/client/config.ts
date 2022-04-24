import { AxiosRequestConfig } from "axios";

export interface AuthorizerConfig {
  authorizer?: (
    config: AxiosRequestConfig
  ) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
}

export interface ClientConfig {
  defaults?: Omit<AxiosRequestConfig, "baseURL" | "url">;
  apiUrl?: string;
}

export class Client {
  private static _config: ClientConfig = {};

  public static get config(): ClientConfig {
    return this._config;
  }

  public static configure(config: ClientConfig) {
    this._config = config;
  }
}

export default Client;
