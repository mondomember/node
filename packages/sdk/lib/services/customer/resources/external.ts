import { parseTemplate } from "../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../client/interfaces";
import { Customer, ExternalIdResponseList } from "@mondomember/model";

type CustomerResponseItem =
  | Customer.ContactResponseItem
  | Customer.CompanyResponseItem;

const PATH = {
  base: "customer/external",
  item: "customer/external/{appKey}/{externalId}",
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
  public listIds(params: {
    customer: string;
  }): ClientResponse<ExternalIdResponseList> {
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
  ): ClientResponse<CustomerResponseItem> {
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
