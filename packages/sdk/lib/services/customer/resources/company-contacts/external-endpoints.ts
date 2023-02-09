import { parseTemplate } from "../../../../client/url-template";
import { ClientInstance, ClientResponse } from "../../../../client/interfaces";

const PATH = {
  base: "external",
  item: "external/{appKey}/{externalCompanyId}/{externalContactId}",
};

type Path = {
  base: string;
  getItem: string;
  manageItem: string;
};

type Expressions = {
  appKey: string;
};

type ItemExpressions = Expressions & {
  externalCompanyId: string;
  externalContactId: string;
};

export class ExternalIdEndpoints<ItemResponse> {
  readonly path: Path;

  constructor(basePath: string, readonly client: ClientInstance) {
    this.path = {
      base: `${basePath}/${PATH.base}`,
      getItem: `${basePath}/${PATH.item}`,
      manageItem: `${basePath}/${PATH.item}`,
    };
  }

  /**
   * Get an item.
   *
   * @param expression
   * @returns
   */
  public getItem(expression: Expressions): ClientResponse<ItemResponse> {
    return this.client.get(parseTemplate(this.path.getItem).expand(expression));
  }

  /**
   * Check if an item exists
   *
   * @param expression
   * @returns
   */
  public checkItem(expression: Expressions): ClientResponse<void> {
    return this.client.head(
      parseTemplate(this.path.getItem).expand(expression)
    );
  }

  /**
   * Create or update a company contact association via external Ids
   *
   * @param expression
   * @param payload
   * @returns
   */
  public attachToItem(expression: ItemExpressions): ClientResponse<void> {
    return this.client.put(
      parseTemplate(this.path.manageItem).expand(expression)
    );
  }

  /**
   * Delete a company contact association via external Ids
   *
   * @param expression
   * @returns
   */
  public detachFromItem(expression: ItemExpressions): ClientResponse<void> {
    return this.client.delete(
      parseTemplate(this.path.manageItem).expand(expression)
    );
  }
}
