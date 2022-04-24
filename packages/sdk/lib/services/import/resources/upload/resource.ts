import { ClientInstance, ClientResponse } from "../../../../client";

import { UploadResponseItemInterface } from "./models";

/**
 * A collection of upload endpoints.
 */
export class UploadResourceEndpoints {
  constructor(readonly path: string, readonly client: ClientInstance) {}

  /**
   * Get permission to upload directory
   *
   * @returns
   */
  public getItem(
    filename: string,
    params?: { [key: string]: string }
  ): ClientResponse<UploadResponseItemInterface> {
    return this.client.get(this.path, {
      params: { ...(params || {}), filename },
    });
  }
}
