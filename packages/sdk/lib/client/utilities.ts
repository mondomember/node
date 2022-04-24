import axios, { AxiosRequestConfig } from "axios";
import { stringify } from "qs";
import { ClientInstance } from ".";
import Config, { ClientConfig } from "./config";

const API_DOMAIN = "https://api.mondo.one";

const STABLE_VERSION = "v1";

export function buildBaseUrl(
  baseUrl: string,
  version: string = STABLE_VERSION
): string {
  return assembleBaseURL(baseUrl, version);
}

export function assembleBaseURL(
  baseUrl: string,
  version: string = STABLE_VERSION
): string {
  return `${baseUrl}/${version}/`;
}

export interface InstanceConfig {
  defaults?: AxiosRequestConfig;
  version?: string;
}

export function createClientInstance(config: InstanceConfig): ClientInstance {
  const mergedConfig = mergeConfig(config);

  return axios.create({
    ...{
      paramsSerializer: (params: any) =>
        stringify(params, { encodeValuesOnly: true, indices: false }),
    },
    ...mergedConfig.defaults,
    ...{
      baseURL: assembleBaseURL(
        mergedConfig.apiUrl || API_DOMAIN,
        config.version || STABLE_VERSION
      ),
    },
  });
}

export function mergeConfig(config?: ClientConfig): ClientConfig {
  return {
    ...Config.config,
    ...config,
  };
}

/**
 * Build a resource path from an array of segments.  The result will be
 * a route with a beginning slash and no ending slash
 *
 * Ex: ['foo','bar'] => "/foo/bar"
 *
 * @param parts
 */
export function buildResourcePath(
  parts: (string | undefined | null)[]
): string {
  return `/${parts
    .map((part) => (!!part ? part.replace(/^\/+|\/+$/g, "") : "")) // strip slashes
    .filter((part) => !!part) // remove empties
    .join("/")}`;
}
