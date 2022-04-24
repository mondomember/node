import * as template from "url-template";

import { ClientResponse } from "../../client";
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
      template.parse(this.path.base).expand(expression),
      payload
    );
  }
}
