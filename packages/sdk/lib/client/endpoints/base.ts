import { parseTemplate } from "../../client/url-template";
import { ClientInstance, ClientResponse } from "../../client/interfaces";

type Path = {
  base: string;
  item: string;
};

export abstract class BaseEndpoints<
  Expressions extends {},
  UpdatePayload,
  ItemResponse
> {
  constructor(readonly path: Path, readonly client: ClientInstance) {}

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(expression: Expressions): ClientResponse<ItemResponse> {
    return this.client.get(parseTemplate(this.path.item).expand(expression));
  }

  /**
   * Update an item.
   *
   * @param expression
   * @param payload
   * @returns
   */
  public updateItem(
    expression: Expressions,
    payload: UpdatePayload
  ): ClientResponse<ItemResponse> {
    return this.client.put(
      parseTemplate(this.path.item).expand(expression),
      payload
    );
  }

  /**
   * Delete an item.
   *
   * @param expression
   * @returns
   */
  public deleteItem(expression: Expressions): ClientResponse<ItemResponse> {
    return this.client.delete(parseTemplate(this.path.item).expand(expression));
  }
}
