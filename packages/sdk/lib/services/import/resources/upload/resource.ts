import { ClientInstance, ClientResponse } from "../../../../client/interfaces";
import { Import } from "@mondomember/model";

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
  ): ClientResponse<Import.UploadResponseItem> {
    return this.client.get(this.path, {
      params: { ...(params || {}), filename },
    });
  }
}
