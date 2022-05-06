import { parseTemplate } from "../../client/url-template";
import { ClientResponse } from "../../client/interfaces";
import { BaseEndpoints } from "./base";

export abstract class NestedCRUDEndpoints<
  BaseExpressions extends {},
  ItemExpressions extends {},
  CreatePayload,
  UpdatePayload,
  ItemResponse
> extends BaseEndpoints<
  BaseExpressions & ItemExpressions,
  UpdatePayload,
  ItemResponse
> {
  /**
   * Create a new item.
   *
   * @param expression
   * @param payload
   * @returns
   */
  public createItem(
    expression: BaseExpressions,
    payload: CreatePayload
  ): ClientResponse<ItemResponse> {
    return this.client.post(
      parseTemplate(this.path.base).expand(expression),
      payload
    );
  }
}
