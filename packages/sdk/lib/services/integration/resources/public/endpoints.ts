import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import { Integration } from "@mondomember/model";

const PATH = "integrations/public/{tenant}";

type Expressions = {
  tenant: string;
};

export default class {
  constructor(readonly client: ClientInstance) {}

  /**
   * Create a new item.
   *
   * @param payload
   * @returns
   */
  public createItem(
    expression: Expressions,
    payload: Integration.PublicTokenCreateItem
  ): ClientResponse<Integration.PublicTokenResponseItem> {
    return this.client.post(parseTemplate(PATH).expand(expression), payload);
  }
}
