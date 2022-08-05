import { parseTemplate } from "../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../client/interfaces";
import { ResponseListInterface } from "../../../shared/external-id/models";
import { CompanyResponseItemInterface } from "./companies/models";
import { ContactResponseItemInterface } from "./contacts/models";

type CustomerResponseItemInterface =
  | ContactResponseItemInterface
  | CompanyResponseItemInterface;

const PATH = {
  base: "external",
  item: "external/{appKey}/{externalId}",
};

type Expressions = {
  appKey: string;
  externalId: string;
};

export default class {
  constructor(readonly client: ClientInstance) {}

  /**
   * List external Id's assigned to a customer.
   *
   * @param params
   * @returns
   */
  public listIds(params: Expressions): ClientResponse<ResponseListInterface> {
    return this.client.get(PATH.base, { params });
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(
    expression: Expressions
  ): ClientResponse<CustomerResponseItemInterface> {
    return this.client.get(parseTemplate(PATH.item).expand(expression));
  }

  /**
   * Check if an item exists
   *
   * @param expression
   * @returns
   */
  public checkItem(expression: Expressions): ClientResponse<void> {
    return this.client.head(parseTemplate(PATH.item).expand(expression));
  }
}
