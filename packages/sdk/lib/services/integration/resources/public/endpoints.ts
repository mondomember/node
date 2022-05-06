import { parseTemplate } from "../../../../client/url-template";

import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

import {
  PublicTokenCreateItemInterface,
  PublicTokenResponseItemInterface,
} from "./models";

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
    payload: PublicTokenCreateItemInterface
  ): ClientResponse<PublicTokenResponseItemInterface> {
    return this.client.post(parseTemplate(PATH).expand(expression), payload);
  }
}
